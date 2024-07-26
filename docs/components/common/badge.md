---
outline: [1, 3]

name: Badge
description: A short piece of text that can be used to display a status or a label.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["solid", "subtle", "outline", "soft"]
  - name: "White"
    identifier: "white"
    variants: ["solid", "subtle", "soft"]
  - name: "Gray"
    identifier: "gray"
    variants: ["solid"]
  - name: "Black"
    identifier: "black"
    variants: ["solid"]

componentCode: |
  return badge({
      Color = <color>,
      Variant = <variant>,
      Text = "Badge",
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
  - name: "Padding"
    type: "number?"
  - name: "ContentSpacing"
    type: "number?"
  - name: "Text"
    type: "string? | [text.text](/components/base/text/#type-text)?"
  - name: "Icon"
    type: "[icon.icon](/components/base/icon/#type-icon)"
  - name: "TrailingIcon"
    type: "[icon.icon](/components/base/icon/#type-icon)"
  - name: "Content"
    type: "fusion.CanBeState<{ Instance }>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
    - name: "Stroke"
    - name: "Text"
---

<ComponentView :frontmatter="$frontmatter"/>
