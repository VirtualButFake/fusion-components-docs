---
outline: [1, 3]

name: FusionUtils
description: A collection of useful functions for Fusion.
usage: |
  Simply import the module and index it with the function you want to use.
  This library contains 2 more complex libraries: [TopLayerProvider](/libs/top-layer-provider) and [PropertyProvider](/libs/fusion-utils/property-provider).

functions:
  - name: "awaitLayer"
    code: |
      fusionUtils.awaitLayer(
          object: GuiObject,
          callback: (layer: [topLayerProvider.layer](/libs/top-layer-provider#functions)) -> any)
      ): nil
    description: |
      This function is used to wait for a layer to be created. As a layer is generally created at a higher level than the component that needs it,
      the layer will not exist yet. This function waits for the layer to be created and then calls the callback with the layer as an argument.
  - name: "getState"
    code: |
      fusionUtils.getState<T>(
          state: fusion.CanBeState<T>
      ): fusion.Value<T>
    description: |
      This function is useful for turning a CanBeState into a reactive value. 
      It will always return a Value for the given property, while returning the original value if the passed value is already a Value.
      The pattern `getState(props.X or y)` is also very useful for defining optional properties.
  - name: "onDestroy"
    code: |
      fusionUtils.onDestroy(
          instance: Instance,
          pendingCleanup: { any }
      ): nil
    description: |
      This function is used to clean up data when an instance is destroyed. 
      `pendingCleanup` is passed to Fusion.cleanup and is useful for cleaning up connections, instances, etc.
  - name: "peek"
    code: |
      fusionUtils.peek<T>(
          value: fusion.CanBeState<T>
      ): T
    description: |
      This function returns the value of a CanBeState without creating a dependency. 
      This is essentially just a wrapper around `value:get(false)` that returns the original value if it is not a StateObject.
  - name: "sizeFromLayer"
    code: |
      fusionUtils.sizeFromLayer(
          object: fusion.CanBeState<GuiObject>,
          size: UDim2
      ): fusion.Value<UDim2>
    description: |
      Given an object and a size, this function returns an UDim2, using offset, that is relative to the layer size.
      In situations where content is hosted in a container like popovers, the size is dependent on the content. 
      But if the content wants to be dependent on the layer size, this function is useful.
  - name: "use"
    code: |
      fusionUtils.use<T>(
          value: fusion.CanBeState<T>
      ): T
    description: |
      Given a CanBeState, get the value and register a dependency if it is a StateObject, otherwise just return the value.
---

<ComponentView :frontmatter="$frontmatter"/>
