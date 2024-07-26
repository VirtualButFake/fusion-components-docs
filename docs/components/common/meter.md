---
outline: [1, 3]

name: Meter
description: A meter that displays labels with their values and icons.

colors:
  - name: "Any"
    identifier: "default"
    variants: ["default"]

componentCode: |
  return meter({
      Indicator = true,
      Labels = {
          {
              Value = 0.2,
              Label = "CPU Usage",
              Color = "red",
              Icon = "server",
          },
          {
              Value = 0.4,
              Label = "GPU Usage",
              Color = "amber",
              Icon = "file-video",
          },
          {
              Value = 0.3,
              Label = "Memory Usage",
              Color = "blue",
              Icon = "memory-stick",
          },
      },
  })

properties:
  - name: ["AppearanceOverride"]
    description: |
      Use the `AppearanceOverride` property to style the component.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass AppearanceOverride as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Height"
    type: "fusion.CanBeState<UDim>?"
  - name: "Max"
    type: "fusion.CanBeState<number>?"
  - name: "Indicator"
    type: "fusion.CanBeState<boolean>?"
  - name: "Labels"
    type: "fusion.CanBeState<{ [label](#types-label) }>"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: "Indicator"
    description: "A slot for the indicator. This overwrites the default indicator."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"

types:
  - name: "label"
    type: |
      {
          AppearanceOverride: fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework#type-optionalColorTable)>?,
          Value: fusion.CanBeState<number>,
          Label: fusion.CanBeState<string>?,
          Color: fusion.CanBeState<string>,
          Icon: fusion.CanBeState<string>?,
          Slot: ((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?,
      }

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
    - name: "Highlight"
    - name: "Indicator"
---

<ComponentView :frontmatter="$frontmatter"/>
