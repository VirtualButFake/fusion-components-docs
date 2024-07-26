---
outline: [1, 3]

name: InputCollector
needsLayer: true
description: A top-layer component that collects all input in the current layer.

usage: |
    In order to create responsive components, it is essential that there is a certain amount of leniency in the way input is handled.
    The `InputCollector` component allows you to collect all input even when not hovering the component through a top-layer `TextButton` that sinks all input.
    This is especially useful for components like sliders, where the user might drag the mouse outside of the component.

    This component does not provide any visual instances and cleans itself up when it's `ReferenceObject` is destroyed. As such, there is no need to assign it to a variable or clean it up manually.

properties:
  - name: ReferenceObject
    description: "The equivalent of the first parameter in a lot of other top-layer components. This is used to determine the layer to place the `InputCollector` in and the component to watch for destruction."
    type: "GuiObject"
  - name: Visible
    description: "Whether the `InputCollector` is visible or not. Be careful with this, as this being `true` means all input on the layer is collected."
    type: "fusion.StateObject<boolean>"
  - name: OnHover
    type: "((hoverState: boolean) -> nil)?"
  - name: OnMouseButton1Changed
    type: "((isPressed: boolean, wasHover: boolean?) -> nil)?"
  - name: OnClick
    type: "((wasHover: boolean) -> nil)?"
  - name: OnMouseMove
    type: "((position: Vector2) -> nil)?"
  - name: OnInputBegan
    type: "((input: InputObject) -> nil)?"
  - name: OnInputEnded
    type: "((input: InputObject) -> nil)?"
  - name: OnInputChanged
    type: "((input: InputObject) -> nil)?"
---

<ComponentView :frontmatter="$frontmatter"/>
