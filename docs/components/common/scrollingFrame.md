---
outline: [1, 3]

name: ScrollingFrame
description: A ScrollingFrame with a built-in themed scrollbar.

colors:
  - name: "Default"
    identifier: "default"
    variants: ["default"]

componentCode: |
  return scrollingFrame({
      Content = {
          New("UIListLayout")({
              FillDirection = Enum.FillDirection.Vertical,
              HorizontalAlignment = Enum.HorizontalAlignment.Center,
              Padding = UDim.new(0, 8),
              VerticalAlignment = Enum.VerticalAlignment.Top,
          }),
          (function()
              local buttons = {}

              for _ = 1, 50 do
                  table.insert(
                      buttons,
                      button({
                          Color = "emerald",
                          Variant = "solid",
                          ButtonText = "Hello, world!",
                          AutomaticSize = Enum.AutomaticSize.XY,
                      })
                  )
              end

              return buttons
          end)(),
      },
      ScrollingFrameProps = {
          AutomaticCanvasSize = Enum.AutomaticSize.Y,
      },
      Size = UDim2.new(0, 100, 0, 200),
      Position = UDim2.new(0, 4, 0, 4),
  })

properties:
  - name: "UI Demo"
    showUIDemo: true
  - name: "Content"
    type: "fusion.CanBeState<{ any }>"
  - name: "IsXBarVisible"
    description: "A value that will be set to `true` if the horizontal scrollbar is visible. This is useful for dynamically adjusting i.e. padding based on scrollbar visibility."
    type: "fusion.Value<boolean>?"
  - name: "IsYBarVisible"
    description: "A value that will be set to `true` if the vertical scrollbar is visible. This is useful for dynamically adjusting i.e. padding based on scrollbar visibility."
    type: "fusion.Value<boolean>?"
  - name: "ScrollingFrameProps"
    type: "{ [any]: any }"
    description: "The properties for the scrolling frame, as it is nested inside of a container. This takes all properties that a `ScrollingFrame` would take."
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

theming:
  states:
    - name: "Base"
  colors:
    - name: "ScrollBar"
    - name: "ScrollbarBackground"
    - name: "Stroke"
---

<ComponentView :frontmatter="$frontmatter"/>
