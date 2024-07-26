---
outline: [1, 3]

name: Popover
needsLayer: true
description: A versatile component that can be used to easily display top-layer content.

usage: |
  This function takes an instance and a table of properties. The instance is used to find the closest [layer](/libs/top-layer-provider/#type-layer) to this object to display the popover on. A layer can be created using [`topLayerProvider.new`](/libs/top-layer-provider/#function-new) It returns the original object through the function, and as such can be wrapped around for example a `New` call.

colors:
  - name: "Default"
    identifier: "default"
    variants: ["default", "transparent"]

componentCode: |
  -- alternatively, you can wrap the popover call around this New call
  local frame = fusionUtils.topLayerProvider.new(New("Frame")({
      BackgroundTransparency = 1,
  }))

  -- cleanup is automatically handled:
  -- when the object is destroyed, the popover is automatically cleaned up
  popover(frame, {
      Variant = props.controls.Variant,
      Visible = true,
      Padding = UDim.new(0, 8),
      Content = function(useColor)
          return text({
              Appearance = useColor("Text", true),
              Text = "Hello, world!",
              AutomaticSize = Enum.AutomaticSize.XY,
          })
      end
  })

  return frame

properties:
  - name: ["Variant", "AppearanceOverride"]
    description: |
      Use the `Variant` and `AppearanceOverride` properties to style the component.

      Available variants differ can be viewed in the UI demo below.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Variant` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Placement"
    description: "The placement of the popover when it is visible."
    type: "[placement](#type-placement)?"
  - name: "Visible"
    type: "fusion.CanBeState<boolean>"
  - name: "Padding"
    type: "fusion.CanBeState<UDim>?"
  - name: "Content"
    description: "The content of the popover. This can either be a list of instances which is passed directly to `fusion.Children` or a function that is called with the `useColor` parameter, to use the available colors in a popover, available [here](#theming)."
    type: |
      fusion.CanBeState<{ any }>
          | ((useColor: theme.useColorFunction) -> fusion.CanBeState<{ any }>)
  - name: "PositionAnimation"
    description: "Determines whether the position should tween between its positions."
    type: "boolean?"
  - name: "Wrapper"
    type: "((popoverFrame: GuiObject) -> GuiObject)?"
    description: "Called with the popover frame as an argument. This can be used to wrap the popover in another instance when needed."
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
    - name: "Stroke"
    - name: "Text"
    - name: "Shadow"
      description: "This is used by `CanvasFrame` to seamlessly fade the shadow in and out, without impacting `AutomaticSize`."

types:
  - name: "placement"
    type: '"left" | "right" | "top" | "bottom" | "bottom-left" | "bottom-right" | "top-left" | "top-right"'
---

<ComponentView :frontmatter="$frontmatter"/>
