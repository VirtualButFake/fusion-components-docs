---
outline: [1, 3]

name: Input
description: A component that takes text input.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default", "outline", "transparent"]
  - name: "Gray"
    identifier: "gray"
    variants: ["default", "outline", "transparent"]

componentCode: |
  local inputText = fusion.Value("")

  return input({
      Color = <color>,
      Variant = <variant>,
      Placeholder = "Placeholder",
      Icon = {
          Name = props.controls.Icon,
          Size = 16,
      },
      Text = inputText,
      OnFocusLost = function(text)
          inputText:set(text)
      end,
      Size = UDim2.fromOffset(100, 24),
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
  - name: "Disabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "Placeholder"
    type: "fusion.CanBeState<string>?"
  - name: "Icon"
    type: "string? | [icon.icon](/components/base/icon/#type-icon)"
  - name: "TrailingIcon"
    type: "string? | [icon.icon](/components/base/icon/#type-icon)"
  - name: "Text"
    tags: ["one-way"]
    description: "The text that should be set. This is a one-way property. For input validation, call `text:set(value, true)` to overwrite the existing text."
    type: "fusion.CanBeState<string>?"
  - name: "TextSize"
    type: "fusion.CanBeState<number>?"
  - name: "TextXAlignment"
    type: "fusion.CanBeState<Enum.TextXAlignment>?"
  - name: "TextYAlignment"
    type: "fusion.CanBeState<Enum.TextYAlignment>?"
  - name: "BlockMouseIcon"
    type: "fusion.CanBeState<boolean>?"
  - name: "OnTextChanged"
    type: "((text: string) -> nil)?"
  - name: "OnFocus"
    type: "(() -> nil)?"
  - name: "OnFocusLost"
    type: "((text: string, enterPressed: boolean, input: InputObject) -> nil)?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: "Left"
    description: "A slot for the left side of the input, where an icon would normally be placed."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?,"
  - name: "Right"
    description: "A slot for the right side of the input, where a trailing icon would normally be placed."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?,"

theming:
  states:
    - name: "Base"
    - name: "Hover"
    - name: "Focus"
    - name: "Disabled"
  colors:
    - name: "Placeholder"
    - name: "Text"
    - name: "Stroke"
    - name: "Background"

types:
---

<ComponentView :frontmatter="$frontmatter"/>
