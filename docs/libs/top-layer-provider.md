---
outline: [1, 3]

name: Top Layer Provider
description: A class that allows you to easily create layers on top of UI, for elements like modals, context menus, etc.

properties:
  - name: "layer.contents"
    description: |
      A table that keeps track of all the children of the layer.
    type: |
        fusion.Value<{ GuiObject }>
  - name: "layer.contentFrame"
    description: |
      The frame that contains both the initial frame and the layer frame.
    type: |
        Frame
  - name: "layer.referenceLayer"
    description: |
        The GuiObject that is initially passed. It is called the reference layer because it's data is used as reference position and size for the layer.
    type: |
        GuiObject
  - name: "layer.state"
    description: |
      A table that keeps track of certain useful values related to the layer.
    type: |
        {
            mousePosition: fusion.Value<Vector2>,
            mouseDown: fusion.Value<boolean>,
            size: fusion.Value<UDim2>,
        }

functions:
  - name: "new"
    code: |
      topLayerProvider.new(
          content: Frame
      ): Frame, [topLayerProvider.layer](#functions)
    description: |
      This function is used to create a new top layer. 
      Given a frame, it will nest the frame inside of a new layer frame so that it can be layered properly. 
      This frame is returned, and should be used instead of the original frame.

      Something to note is that the layer created attempts to keep the same size as the reference layer, by monitoring the AbsoluteSize of the reference layer. However, using a frame that uses `Scale` instead of `Offset` sizing will result in it shrinking to 0, 0. To combat this, place the layer as high as possible in your UI hierarchy (so don't wrap a single frame in a layer, but rather wrap the entire UI in a single layer). You want to use as few layers as possible, only using them to isolate certain interaction areas in your UI.
  - name: "getLayer"
    code: |
      topLayerProvider.getLayer(
          content: GuiObject
      ): [topLayerProvider.layer?](#functions)
    description: |
      If the passed value is a valid layer or a child of a valid layer, this function will return the layer.
      Otherwise, it will return `nil`.
  - name: "add" # to layer
    code: |
      layer:add(
          content: GuiObject
      ): nil
    description: |
      This function adds an element to the layer. If it is already parented to the layer, the children are not updated.
  - name: "remove" # from layer
    code: |
      layer:remove(
          content: GuiObject
      ): nil
    description: |
      This function attempts to find the element in the layer and removes it. If it is not found, nothing happens.
  - name: "destroy"
    code: |
      layer:destroy(): nil
    description: |
      This function destroys the layer. All children are kept intact if only this function is called, but will be parented to nil. 
      Keep this is mind when developing components as it can lead to memory leaks if these instances are never destroyed. [OnDestroy](libs/fusion-utils/#onDestroy) is very useful for this.
---

<ComponentView :frontmatter="$frontmatter"/>
