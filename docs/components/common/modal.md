---
outline: [1, 3]

name: Modal
needsLayer: true
description: A modal component that displays content on top of the current layer.

usage: |
  The modal is similiar in usage to a Context Menu, in that it takes an object as parameter.
  This object is used to find the closest [layer](/libs/top-layer-provider/#type-layer) to this object to display the modal on.

  The original object is returned through the function. For a usage example, see the UI demo below.

colors:
  - name: "Gray"
    identifier: "gray"
    variants: ["default"]

componentCode: |
  -- You don't have to create a new layer each time, this is just an example.
  return fusionUtils.topLayerProvider.new(
      New("Frame")({
          BackgroundTransparency = 1,
          Size = UDim2.new(0, 500, 0, 300),
          [Children] = modal(
              button({
                  Color = "gray",
                  Variant = "solid",
                  ButtonText = "Click me to open the modal",
                  AutomaticSize = Enum.AutomaticSize.XY,
                  OnClick = function()
                      isOpen:set(true)
                  end,
              }),
              {
                  Visible = isOpen,
                  Content = {
                      button({
                          Color = "gray",
                          Variant = "solid",
                          ButtonText = "Click me to close this modal",
                          AutomaticSize = Enum.AutomaticSize.XY,
                          OnClick = function()
                              isOpen:set(false)
                          end,
                      }),
                  },
              }
          )
      })
  )

properties:
  - name: ["AppearanceOverride"]
    description: |
      Use the `AppearanceOverride` property to style the component.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "PopoverAppearanceOverride"
    description: "The appearance override for the popover in which the content is placed. Appearance information is available [here](/components/common/popover/#theming)."
    type: "fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework#type-optionalColorTable)>?"
  - name: "Visible"
    type: "fusion.StateObject<boolean>"
  - name: "Content"
    type: "fusion.CanBeState<{ any }>?"
  - name: "Padding"
    type: "fusion.CanBeState<UDim>?"
  - name: "OnClickBesides"
    type: "(() -> nil)?"

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
---

<ComponentView :frontmatter="$frontmatter"/>
