---
outline: [1, 3]

name: CanvasFrame
description: A frame that seamlessly switches between a CanvasGroup and a Frame based on it's content.

usage: |
  Simply put, just wrap your content in a `CanvasFrame` as if it was a normal Frame and adjust the transparency accordingly.
  A `CanvasFrame` is designed for seamless compatibility with existing content, so you can use it as a drop-in replacement for a `Frame`.

properties:
  - name: "GroupTransparency"
    description: |
      The transparency of the content. The `CanvasFrame` switches between it's states based on the following conditions:
      - `invisible`: `GroupTransparency` is larger than `0.99999` or `Visible` is false.
      - `canvas`: `GroupTransparency` is higher than 0.00001.
      - `frame`: `GroupTransparency` is lower than 0.00001.

      There may be a frame of delay when switching from `frame` to `canvas`, as `CanvasGroup`s are rendered as a texture, so they need a frame or so to render.
    type: "fusion.StateObject<number>"
  - name: "Visible"
    type: "fusion.CanBeState<boolean>??"
  - name: "Children"
    type: "fusion.CanBeState<{ any }>"
  - name: "Shadow"
    description: |
      This expects a theme color to be passed. The `shadow` field will be retrieved from it.
      This way, the canvas can dynamically render shadows without causing sizing conflicts.

      Components like [`popover`](/components/common/popover) have this built-in, but if you wish to implement this on your own components, simply pass in a theme color that has a `shadow` field.
    type: "fusion.CanBeState<[theme.color](/libs/theme-framework#type-color)>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
---

<ComponentView :frontmatter="$frontmatter"/>
