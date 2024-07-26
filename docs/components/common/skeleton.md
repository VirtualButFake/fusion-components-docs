---
outline: [1, 3]

name: Skeleton
description: A component to indicate loading or a placeholder for content.

usage: |
  This component is especially useful alongside the [`Await`](/components/utility/await) component. It can be used to show temporary content while the actual content is loading.

  Simply pass a `Frame` containing skeletons to `TemporaryContent` in `Await` and set `Loaded` to true when the content is ready.

colors:
  - name: "Default"
    identifier: "default"
    variants: ["default"]

componentCode: |
  return New("Frame")({
      BackgroundTransparency = 1,
      Position = UDim2.fromOffset(16, 16),
      Size = UDim2.new(0, 300, 0, 300),
      [Children] = {
          skeleton({
              CornerRadius = UDim.new(0, 4),
              Animated = true,
              Size = UDim2.new(0, 150, 0, 16),
          }),
          skeleton({
              CornerRadius = UDim.new(0, 4),
              Animated = true,
              Position = UDim2.fromOffset(0, 20),
              Size = UDim2.new(0, 100, 0, 16),
          }),
          skeleton({
              CornerRadius = UDim.new(0, 8),
              Animated = true,
              Position = UDim2.fromOffset(0, 48),
              Size = UDim2.new(0, 150, 0, 50),
          }),
      },
  })

properties:
  - name: ["AppearanceOverride"]
    description: |
      Use the `AppearanceOverride` property to style the component.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "CornerRadius"
    type: "fusion.CanBeState<UDim>?"
  - name: "Animated"
    type: "fusion.CanBeState<boolean>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
      description: "The base color of the skeleton."
    - name: "Animated"
      description: "The highlight color of the skeleton. This color will be animated using the background color to create a loading effect."
---

<ComponentView :frontmatter="$frontmatter"/>
