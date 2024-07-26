---
outline: [1, 3]

name: Checkbox
description: A simple checkbox that can be either checked or unchecked.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default"]

componentCode: |
  local state = fusion.Value(false)

  return checkbox({
      Color = <color>,
      State = state,
      OnClick = function()
          state:set(not state:get())
      end,
  })
properties:
  - name: ["Color", "AppearanceOverride"]
    description: |
      Use the `Color` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.
      Available variants differ per color and can be viewed in the UI demo below.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).

      (image on the right in the demo has `Disabled` set to true)
    showUIDemo: true
  - name: "Disabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "State"
    tags: ["one-way"]
    type: "fusion.CanBeState<boolean>?"
    description: "The state of the checkbox. This defaults to false."
  - name: "Icon"
    type: "string? | [icon.icon](/components/base/icon.md#type-icon)"
  - name: "Padding"
    type: "number?"
  - name: "OnClick"
    type: "((state: fusion.StateObject<boolean>) -> nil)?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
    - name: "Hover"
    - name: "Active"
    - name: "HoverActive"
    - name: "Disabled"
    - name: "DisabledActive"
  colors:
    - name: "Background"
    - name: "Text"
    - name: "Stroke"
---

<ComponentView :frontmatter="$frontmatter"/>
