---
outline: [1, 3]

name: Button
description: A simple button that can be used for a variety of purposes.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["solid", "ghost", "outline"]
  - name: "White"
    identifier: "white"
    variants: ["solid", "ghost"]
  - name: "Gray"
    identifier: "gray"
    variants: ["solid", "ghost"]
  - name: "Black"
    identifier: "black"
    variants: ["solid", "ghost"]

componentCode: |
  return button({
      Color = <color>,
      Variant = <variant>,
      ButtonText = "Example text",
      Icon = "mouse-pointer-click"
      AutomaticSize = Enum.AutomaticSize.XY
  })
properties:
  - name: ["Color", "Variant", "AppearanceOverride"]
    description: |
      Use the `Color`, `Variant` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.
      Available variants differ per color and can be viewed in the UI demo below.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` and `Variant` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Hovering"
    type: "fusion.CanBeState<boolean>?"
    description: |
      A state input for hovers. If passed a boolean, it will be converted into a value inside of the component.
      Otherwise, the value will be used to determine hover states. Setting this to true will enable the hover appearance.
  - name: "Pressing"
    type: "fusion.CanBeState<boolean>?"
    description: |
      A state input for presses. If passed a boolean, it will be converted into a value inside of the component.
      Otherwise, the value will be used to determine pressing states. Setting this to true will enable the press appearance.
  - name: "Disabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "DisableHoverLighting"
    type: "fusion.CanBeState<boolean>?"
  - name: "Padding"
    type: "number?"
  - name: "ContentSpacing"
    type: "number?"
  - name: "ButtonText"
    type: "fusion.CanBeState<string>? | [text.text](/components/base/text.md#type-text)"
  - name: "Icon"
    type: "fusion.CanBeState<string>? | [icon.icon](/components/base/icon.md#type-icon)"
  - name: "TrailingIcon"
    type: "fusion.CanBeState<string>? | [icon.icon](/components/base/icon.md#type-icon)"
  - name: "Content"
    type: "fusion.CanBeState<{ Instance }>?,"
  - name: "ContentFullSize"
    type: "boolean?"
    description: "Whether the content should, by default, take up the full size available instead of sizing to its content."
  - name: "OnMouseChanged"
    type: "((isDown: boolean) -> nil)?"
  - name: "OnClick"
    type: "(() -> nil)?"
  - name: "OnMouseButton2Changed"
    type: "((isDown: boolean) -> nil)?"
  - name: "OnMouseButton2Click"
    type: "(() -> nil)?"
  - name: "OnHover"
    type: "((isHovering: boolean) -> nil)?"
  - name: "DisablePressHandler"
    type: "boolean?"
    description: "Whether presses should be handled by the button or something external (through the Pressing property)"
  - name: "DisableHoverHandler"
    type: "boolean?"
    description: "Whether hovers should be handled by the button or something external (through the Hovering property)"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `TextButton`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
    - name: "Hover"
    - name: "Pressing"
    - name: "Disabled"
  colors:
    - name: "Background"
    - name: "Text"
    - name: "Stroke"
---

<ComponentView :frontmatter="$frontmatter"/>
