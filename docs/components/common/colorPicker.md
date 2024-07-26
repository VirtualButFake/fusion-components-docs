---
outline: [1, 3]

name: ColorPicker
description: An easy-to-use component that allows users to pick a custom color or choose from a predefined set of colors.

colors:
  - name: "White"
    identifier: "white"
    variants: ["default"]

componentCode: |
  return New("Frame")({
      Name = "Container",
      BackgroundTransparency = 1,
      Size = UDim2.fromOffset(200, 260), -- this is the recommended size
      [Children] = {
          colorPicker({
              Color = <color>,
              Value = Color3.fromRGB(0, 255, 0),
          }),
      },
  })

properties:
  - name: ["Color", "AppearanceOverride"]
    description: |
      Use the `Color` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.
      Worth noting is that the `Color` property is not used for the component, but instead for the [Tabs](/components/common/tabs) component that is used inside of it.
      As such, `AppearanceOverride`s for Tabs can be passed through an alternate property, `TabsAppearanceOverride`.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` as a string and `AppearanceOverride` as an [`optionalColorTable`](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "TabsAppearance"
    description: "The appearance override for the [Tabs](/components/common/tabs) component.Theming info is available [here](/components/common/tabs#theming)."
    type: "fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework#type-optionalColorTable)>?"
  - name: "HidePalette"
    description: "Whether the color palette should be hidden, resulting in only the color picker being visible. This also hides the Tabs component."
    type: "fusion.CanBeState<boolean>?"
  - name: "Value"
    tags: ["one-way"]
    type: "fusion.CanBeState<Color3>?"
  - name: "PaletteColors"
    description: "This value defaults to a set of predefined colors, which is a list of pre-existing `BrickColor`s. If you want to use a custom set of colors, you can pass a list of `Color3`s."
    type: "fusion.CanBeState<{ Color3 }>?"
  - name: "OnColorChange"
    type: "((color: Color3) -> nil)?"
  - name: "OnColorSet"
    type: "((color: Color3) -> nil)?"
  - name: "OnDragStart"
    description: "Fired when the user starts dragging any handle."
    type: "((color: Color3) -> nil)?"
  - name: "OnDragEnd"
    description: "Fired when the user stops dragging any handle. Do not use this as replacement for `OnColorSet`, as text changes will not trigger this event."
    type: "((color: Color3) -> nil)?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
    - name: "Hover"
      description: "The hover state for a color palette button."
    - name: "Press"
      description: "The press state for a color palette button/"
  colors:
    - name: "PaletteBackground"
    - name: "Stroke"
    - name: "SliderHandle"
      description: "This value manages the shadow and stroke of the slider handle. The stroke is automatically applied to the handle inside of the color palette"
    - name: "Background"
      description: "The background overlay for color palette buttons."
    - name: "Stroke"
      description: "The stroke for color palette buttons."
---

<ComponentView :frontmatter="$frontmatter"/>
