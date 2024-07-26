---
outline: [1, 3]

name: Sink Frame
description: "A frame as a TextButton, to capture user input and prevent input from passing through."

properties:
  - name: "Appearance"
    type: "fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?"
  - name: "Stroke"
    type: |
      fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?
  - name: "TweenSettings"
    description: "The tween settings for transitioning between appearances."
    type: "TweenInfo?"
  - name: "CornerRadius"
    type: "number? | UDim?"
  - name: "Padding"
    type: |
      fusion.CanBeState<UDim>? | {
          Top: fusion.CanBeState<UDim>?,
          Bottom: fusion.CanBeState<UDim>?,
          Left: fusion.CanBeState<UDim>?,
          Right: fusion.CanBeState<UDim>?,
      }?
  - name: "Content"
    type: "fusion.CanBeState<{ Instance }>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
---

<ComponentView :frontmatter="$frontmatter"/>
