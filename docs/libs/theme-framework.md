---
outline: [1, 3]

name: ThemeFramework
description: The framework that sets up the theming engine for all components.
usage: |
  ThemeFramework doesn't have it's own documentation and for that reason, most relevant functions and types are documented 
  here as they are widely used throughout the components.

  The theming engine allows a `color`, `transparency` and `shadow` to be defined. Each base component will pick up on these. 
  Important to note is that all values are transformed into reactive Fusion values when loaded into the theming engine. 
  This means that an update will refresh all components and as such, should be used sparingly.

  A guide on how to set it up can be found [here](/getting-started/#writing-components).

functions:
  - name: "new"
    code: |
      themeFramework.new(
         componentLocation: Instance,
         onBuild: ((self: themeFramework) -> ())?
      ) -> themeFramework
    description: |
      This function is used to create a new theme. 
      Given a component location that fits the format, it will create a new theme and return it.
      This does not load any data yet; you should call `theme:load` after creating the theme.
  - name: "get"
    code: |
      theme:get(
          componentName: string,
          color: fusion.CanBeState<string>,
          variant: fusion.CanBeState<string>,
          state: fusion.CanBeState<string>,
          override: fusion.CanBeState<themeFramework.optionalColorTable>?,
      ) -> themeFramework.useColorFunction
    description: |
      This function is the function you'll be interacting with the most. 
      It returns a function that given a field, returns the color data for that field.
  - name: "build"
    code: |
      theme:build(
          themeName: string,
      ) -> themeFramework.componentColorList
    description: |
      This function is used to build the theme data for a specific theme.
      It iterates through all known colors and variants and calls the functions for each of them.

      Something to note is that this does *not* load the theme data yet. It just prepares it, and loading has to be done through `theme:load`.
  - name: "load"
    code: |
      theme:load(
          themeData: themeFramework.componentColorList,
      ) -> ()
    description: |
      This function is used to load the theme data into the theme engine.
      It takes the theme data from `theme:build` and updates all current colors.
  - name: "setFallback"
    code: |
      theme:setFallback(
          fallback: Color3,
      ) -> ()
    description: |
      When a color is not found, we still need a color to return to prevent errors.
      When defining themes, it's generally smart to just call this function with a color that fits the theme somewhat.

types: 
# just define the names for now
  - name: "color"
    type: |
        {
            color: string,
            transparency: number,
            shadow: number,
        }
  - name: "colorOptional"
    type: |
        {
            color: string?,
            transparency: number?,
            shadow: number?,
        }
  - name: "colorTable"
    type: |
        [color](#type-color) | {
            [string]: [colorTable](#type-colorTable),
        }
  - name: "optionalColorTable"
    type: |
        [colorOptional](#type-colorOptional) | {
            [string]: [optionalColorTable](#type-optionalColorTable),
        }
  - name: "useColorFunction"
    description: |
        This function is returned by `theme:get` and is used to get the color data for a specific field.

        **If a color is not found, it will return a table with the fallback color set, and transparency set to 1.**
    type: |
        (index: fusion.CanBeState<string>, reactive: boolean?) -> fusion.Computed<[color](#type-color)> | [color](#type-color)
  - name: "componentColorList"
    type: |
        {
            [string]: {
                [string]: [color](#type-color),
            }
        }

---

<ComponentView :frontmatter="$frontmatter"/>
