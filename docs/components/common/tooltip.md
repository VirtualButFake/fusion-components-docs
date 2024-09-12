---
outline: [1, 3]

name: Tooltip
needsLayer: true
description: A pop-up box that appears when a user hovers over an element.

usage: | 
    The component takes an object as first parameter. This will be used to find the closest [layer](/libs/theme-framework#layer) to the component. The layer will be used to position the tooltip. The second parameter are the properties. By default, the tooltip is shown when the object is hovered.

colors:
  - name: "Default"
    identifier: "default"
    variants: ["default", "transparent"]

componentCode: |
    return tooltip(
        button({
            Color = "red",
            ButtonText = "Hover over me for a tooltip!",
            Icon = {
                Name = "mouse-pointer",
                Size = 16,
            },
            AutomaticSize = Enum.AutomaticSize.XY,
            Variant = "solid",
        }),
        {
            Variant = <variant>,
            Text = "Tooltip",
            FollowMouse = true,
        }
    )

properties:
  - name: ["Variant", "AppearanceOverride"]
    description: |
      Use the `Variant` and `AppearanceOverride` properties to style the component.

      Available variants differ per color and can be viewed in the UI demo below.

      Pass `Variant` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).

      The variant is directly passed to a `popover`, and any appearance overrides are also passed to the `popover`. As such, theming information is available [here](/components/common/popover#theming).
    showUIDemo: true
  - name: "FollowMouse"
    description: "If this is true, the tooltip will follow the mouse."
    type: "boolean?"
  - name: "RelativePosition"
    description: "Optional extra offset to the tooltip's position."
    type: "fusion.CanBeState<UDim2>?"
  - name: "Placement"
    description: "The placement of the tooltip relative to the object. If `FollowMouse` is true, this will be ignored."
    type: "[popover.placement](/components/common/popover/#type-placement)?"
  - name: "Text"
    type: "string? | [text.text](/components/common/text/#type-text)?"
  - name: "Visible"
    type: "fusion.CanBeState<boolean>?"
  - name: "DisableHoverBehaviour"
    description: "If this is true, custom behaviour can be used for displaying the tooltip, by manipulating the `Visible` property."
    type: "boolean?"
  - name: "Padding"
    type: "fusion.CanBeState<UDim>?"
  - name: "Enabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: "Content"
    description: "The content of the tooltip. This will overwrite any existing content."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
---

<ComponentView :frontmatter="$frontmatter"/>
