---
outline: deep
---

<script setup>
const packageVersions = {
    "fusion-components": "0.1.6",
    "theme-framework": "0.1.0",
    "fusion-utils": "0.1.0",
    tailwind: "0.1.0",
}

const packagesContent = `[dependencies]
fusionComponents = "VirtualButFake/fusion-components@${packageVersions["fusion-components"]}"
themeFramework = "VirtualButFake/theme-framework@${packageVersions["theme-framework"]}"
# fusion-utils is recommended due to a lot of components depending on a 
# layer being created. This is done through [TopLayerProvider](/libs/top-layer-provider) in fusion-utils.
fusionUtils = "VirtualButFake/fusion-utils@${packageVersions["fusion-utils"]}"
# If you want to use Tailwind colors for your themes, add this line.
tailwind = "VirtualButFake/tailwind@${packageVersions.tailwind}"`
</script>

# Getting Started

FusionComponents is accessible through Wally.

## Installation

1. Make sure you have [Rojo](https://github.com/rojo-rbx/rojo) and [Wally](https://github.com/UpliftGames/wally) installed.
2. Add FusionComponents and theme-framework to your `wally.toml` file.

<!-- We make this a CodeBlock instead of just using markdown because we want links to render correctly -->
<CodeBlock lang="toml" :content="packagesContent"/>

3. Run `wally install` in your project directory.

## Using components

1. In your component, require `FusionComponents`:

```lua
local FusionComponents = require(path.to.FusionComponents)
```

2. Components are grouped by their category, either `base`, `common` or `utility`.
   Components are listed in the sidebar, grouped on their category, with both category and name being in camelCase. Alternatively, there is autocomplete on components. For example, to access `Frame`, you can use `FusionComponents.base.frame`.

## Writing components

1. Somewhere in your project, create a `theme` folder. This will house all styles for your components.
2. Create a `components` folder and `init.luau` file in the directory.
3. Inside of your `init.luau` file, add the following base code:

```luau
local Studio = settings().studio

local themeFramework = require(path.to.themeframework)
local fusion = require(path.to.fusion)

export type color = themeFramework.color
export type colorTable = themeFramework.colorTable
export type optionalColorTable = themeFramework.optionalColorTable
export type useColorFunction = themeFramework.useColorFunction

local theme = themeFramework.new(script.components, function(self, themeName)
    -- This function is called whenever the theme is successfully rebuilt.
    -- This is useful for registering a fallback color for the theme
    -- or global values that can be read from the theme.
    self:setFallback(themeName == "Dark" and Color3.fromRGB(30, 30, 30) or Color3.fromRGB(255, 255, 255))
end)

-- Register connections to handle theme changes
local connections = {
    Studio.ThemeChanged:Connect(function()
        -- theme:build calls all theme functions and packs them into a table
		theme:load(theme:build(Studio.Theme.Name))
	end),
	script.Destroying:Connect(function()
		theme.destroy()
	end),
}

theme:load(theme:build(Studio.Theme.Name))

return setmetatable({
    -- Add your own methods here, for ex. exposing globals such as isDark
    -- can be useful to respond to theme changes efficiently
    destroy = function()
        -- Clean up connections, so that testing doesn't result in massive memory
        -- leaks, especially when changing theme
		Clean(connections)
        theme = nil
    end
}) :: themeFramework.themeFramework & {
    destroy: () -> ()
}
```

More fleshed out examples can be found [here](https://github.com/VirtualButFake/VFXEditor/blob/main/src/theme/init.luau) and [here](https://github.com/VirtualButFake/VFXEditor/blob/main/src/theme/init.luau).

A short documentation on theme-framework can be found [here](/libs/theme-framework).

4. Create a folder named after your component inside of the `theme/components` folder. This is where you will define the appearance of your components.
5. Create a folder named after a color, or `default` for fallback, inside of the component folder. This is where you will define the appearance of your components in that color.
6. Create a file named after the variant of the component you want to define. This is where you will define the appearance of your components in that variant.
7. Inside this file, define the appearance of your component through a function. This function will be passed the theme name.
   This is generally structured as follows:

```luau
local tailwind = require(path.to.tailwind)

return function(themeName: string)
	return {
        -- This would define the appearance for the "Base" state
		Base = {
            -- These values take a Color3 value, or a table that contains
            -- a color, transparency and shadow field.
			Background = themeName == "Dark" and tailwind.neutral[800] or tailwind.neutral[100],
			Stroke = { color = themeName == "Dark" and tailwind.neutral[700] or tailwind.neutral[300] },
		},
	}
end
```

8. In your components, import your theme and use `theme:get()` to get your data.
   Keep in mind that all but the first parameters passed to `theme:get()` can be reactive, which is especially useful when it comes to the last parameter, which is responsible for managing the state. A common pattern is passing a Computed value as the last parameter to `theme:get()`, so for ex. hovering states can be applied automatically. Base components will smoothly transition colors, so it's not necessary to handle animations yourself.

```luau
local fusion = require(path.to.fusion)
local theme = require(path.to.themeHandler)

local FusionComponents = require(path.to.FusionComponents)
local frame = FusionComponents.base.frame

local function MyComponent(props)
    local useColor = theme:get("MyComponent", props.Color, props.Variant, "Base", props.AppearanceOverride)

    return frame({
        Appearance = useColor("Background", true), -- the second parameter determines whether a reactive value (a Computed) should be passed instead of the raw values
        Stroke = useColor("Stroke", true),
        Size = UDim2.new(0, 100, 0, 100),
    })
end
```

## Appearance Overrides

FusionComponents and theme-framework allows full customization of all colors through Appearance Overrides. These values are passed into a component instance and can be used to override the default appearance of a component.

**These values are passed through `theme:get()`, as it's last, optional, parameter.**

theme-framework finds the depth of the table passed and determines where to merge based on this depth. As such, these overrides work on many levels:

1. State Level: This is used to override components when in a specific state. These tables look as follows:

```luau
{
    Base = {
        Background = {
            color = Color3.fromRGB(255, 255, 255),
            transparency = 0.5,
            shadow = 0
        },
    },
    Hover = {
        Background = {
            color = Color3.fromRGB(255, 255, 255),
            transparency = 0,
            shadow = 0
        },
    },
}
```

You may override any of these values to change the appearance of a component when in a specific state.

2. Value Level: This is used to override specific aspects of a component, such as it's background or stroke. These tables look as follows:

```luau
{
    Background = {
        color = Color3.fromRGB(255, 255, 255),
        transparency = 0.5,
        shadow = 0
    },
    Stroke = {
        color = Color3.fromRGB(255, 255, 255),
        transparency = 0.5,
        shadow = 0
    },
}
```

You may override any of these values to change a specific aspect of a component.

3. Color Level: a color is defined as a set of `color`, `transparency` and `shadow` values. These tables look as follows:

```luau
{
    color = Color3.fromRGB(255, 255, 255),
    transparency = 0.5,
    shadow = 0
}
```

You may override any of these values to all occurences of a color in a component. Be careful with this, as it's scope is very broad.

4. Combined Level: the theming engine will iterate through the override table and find the first color. At this depth, it tries to apply the override.
   This might make it seem complicated to mix levels, to for example modify both a certain state and all states at the same time. However, that's where `_global` comes into play.
   `_global` allows you to override all keys at the depth where it was applied. This is done when merging with the original color table.

As such, combining an override at the state and color level may be done as follows:

```luau
{
    Base = {
        Background = {
            color = Color3.fromRGB(255, 255, 255),
            transparency = 0.5,
            shadow = 0
        }
    },
    _global = {
        Stroke = { transparency = 1 }
    }
}
```

This will override the background color of the base state, and set the transparency of the stroke to 1 for all states.
