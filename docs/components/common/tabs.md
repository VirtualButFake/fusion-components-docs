---
outline: [1, 3]

name: Tabs
description: A component that allows users to switch between different sections of content.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["solid", "outline", "outlinefull", "ghost"]
  - name: "White"
    identifier: "white"
    variants: ["solid", "outline", "ghost"]

componentCode: |
  return tabs({
      Color = <color>,
      Variant = <variant>,
      Tabs = {
          {
              Label = "Tab 1",
              Content = {
                  button({
                      Color = "emerald",
                      Variant = "solid",
                      ButtonText = "Tab 1 content",
                      AutomaticSize = Enum.AutomaticSize.XY,
                  })
              }
          },
          {
              Label = "Tab 2",
              Content = {
                  button({
                      Color = "red",
                      Variant = "solid",
                      ButtonText = "Tab 2 content",
                      AutomaticSize = Enum.AutomaticSize.XY,
                  })
              }
          },
          {
              Label = "Tab 3",
              Content = {
                  button({
                      Color = "indigo",
                      Variant = "solid",
                      ButtonText = "Tab 3 content",
                      AutomaticSize = Enum.AutomaticSize.XY,
                  })
              }
          }
      }
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
  - name: "Tabs"
    type: |
      fusion.CanBeState<{
          {
              Label: string,
              Disabled: fusion.CanBeState<boolean>?,
              Content: fusion.CanBeState<{ any }>,
          }
      }>
  - name: "DefaultIndex"
    type: "number?"
  - name: "SelectedIndex"
    type: "fusion.Value<number>?"
  - name: "OnSelect"
    type: "((index: number) -> nil)?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Container"
      description: "The state for the container of the tabs."
    - name: "Base"
      description: "The base state for the tab elements."
    - name: "Hover"
    - name: "Press"
    - name: "Active"
    - name: "Disabled"
    - name: "ActiveDisabled"
      description: "If the currently selected tab is disabled, this state will be applied."
  colors:
    - name: "Background"
    - name: "Stroke"
    - name: "Text"
---

<ComponentView :frontmatter="$frontmatter"/>
