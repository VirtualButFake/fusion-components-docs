---
outline: [1, 3]

name: Button
description: A component that provides a strong base for interactive elements.

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
  - name: "OnClick"
    type: "(() -> nil)?"
  - name: "OnMouseButton2Click"
    type: "(() -> nil)?"
  - name: "OnMouseButton1Changed"
    description: |
      This event is fired when the left mouse button is pressed or released.

      Something to note is that when the mouse leaves the button, this event fires with `false`.
      This is done as a safety measure to ensure that the button is not stuck in a pressed state.
    type: "((isDown: boolean) -> nil)?"
  - name: "OnMouseButton2Changed"
    description: |
      This event is fired when the right mouse button is pressed or released.

      Something to note is that when the mouse leaves the button, this event fires with `false`.
      This is done as a safety measure to ensure that the button is not stuck in a pressed state.
    type: "((isDown: boolean) -> nil)?"
  - name: "OnHover"
    type: "((hoverState: boolean) -> nil)?"
  - name: "DisableHoverLighting"
    description: "By default, the button will lighten on the mouse position when hovered. This property disables that effect."
    type: "fusion.CanBeState<boolean>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `TextButton`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
---

<ComponentView :frontmatter="$frontmatter"/>
