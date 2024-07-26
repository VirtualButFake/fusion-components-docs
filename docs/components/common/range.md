---
outline: [1, 3]

name: Range
needsLayer: true
description: A slider component that allows the user to select a range of values.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default"]

componentCode: |
  return New("Frame")({
      BackgroundTransparency = 1,
      Size = UDim2.fromOffset(150, 16),
      [Children] = {
          range({
              Color = props.controls.Color,
              Width = UDim.new(1, 0),
              Min = 0,
              Max = 10,
              Step = 1,
              VisualizeSteps = true,
              Tooltip = true,
              Value = { 2, 6 },
          }),
      },
  })

properties:
  - name: ["Color", "AppearanceOverride"]
    description: |
      Use the `Color` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "TooltipAppearanceOverride"
    type: "fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework#type-optionalColorTable)>?"
  - name: "Disabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "BarHeight"
    description: "Defaults to `0, 8`."
    type: "fusion.CanBeState<UDim>?"
  - name: "HandleSize"
    description: "Defaults to `0, 16, 0, 16`."
    type: "fusion.CanBeState<UDim2>?"
  - name: "Width"
    type: "fusion.CanBeState<UDim>?"
  - name: "Value"
    tags: ["one-way"]
    type: "fusion.CanBeState<{ fusion.CanBeState<number> }>"
  - name: "Min"
    type: "fusion.CanBeState<number>?"
  - name: "Max"
    type: "fusion.CanBeState<number>?"
  - name: "Step"
    type: "fusion.CanBeState<number>?"
  - name: "VisualizeSteps"
    type: "fusion.CanBeState<boolean>?"
  - name: "Tooltip"
    type: "boolean?"
  - name: "TooltipPlacement"
    type: "[popover.placement](/components/common/popover/#type-placement)?"
  - name: "InterceptChange"
    description: "Before the value is set, this function is called with the new value. The returned value is used as the new value. If there is no return value, the old value is used. This can be used to clamp the value dynamically."
    type: "((value: { number }) -> { number })?"
  - name: "OnValueChange"
    description: "`index` can be either `1` or `2` and `value` is the new value for the handle at that index."
    type: "((index: number, value: number) -> nil)?"
  - name: "OnDrag"
    description: "`state` is whether the handle is being dragged. `values` contains 2 values, which are the current values of the handles."
    type: "((state: boolean, values: { number }) -> nil)?"

slots:
  - name: "Handle"
    description: "Will be called twice, once for each handle. The second parameter is a reactive value that is the percentage of the handle, which will be between 0 and 1."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), percentage: fusion.Value<number>) -> fusion.CanBeState<{ any }>)?"
  - name: "Tooltip"
    description: "Replaces the content of the tooltip. Second parameter is a table containing each handle's value."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), value: { fusion.Value<number> }) -> fusion.CanBeState<{ any }>)?"
  - name: "BarBase"
    description: "The base, non-highlighted part of the bar."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: "BarFill"
    description: "The highlighted part of the bar. The second parameter is the percentages that both handles are at. The range between these percentages should be highlighted."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), percentages: { fusion.Value<number> }) -> fusion.CanBeState<{ any }>)?"

theming:
  states:
    - name: "Base"
    - name: "Hover"
  colors:
    - name: "Background"
    - name: "Highlight"
    - name: "Handle"
    - name: "Step"
---

<ComponentView :frontmatter="$frontmatter"/>
