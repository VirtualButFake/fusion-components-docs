---
outline: [1, 3]

name: ProgressBar
description: A simple component that displays a progress bar with a given progress value or a loading bar.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default", "indeterminate"]

componentCode: |
  return New("Frame")({
      BackgroundTransparency = 1,
      Size = UDim2.new(0, 150, 0, 8),
      [Children] = progress({
          Color = <color>,
          -- non-indeterminate
          Progress = 4,
          Indicator = true,
          Max = 10,
          -- indeterminate
          Indeterminate = true,
      })
  })
properties:
  - name: ["Color", "AppearanceOverride"]
    description: |
      Use the `Color` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Height"
    type: "fusion.CanBeState<UDim>?"
  - name: "Progress"
    type: "fusion.CanBeState<number>?"
  - name: "Max"
    type: "fusion.CanBeState<number>?"
  - name: "Indicator"
    type: "fusion.CanBeState<boolean>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: "Indicator"
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
    - name: "Highlight"
    - name: "Indicator"
---

<ComponentView :frontmatter="$frontmatter"/>
