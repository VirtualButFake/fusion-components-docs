---
outline: [1, 3]

name: Alert
description: An alert component to draw attention to important information.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["solid", "subtle", "outline", "soft"]
  - name: "White"
    identifier: "white"
    variants: ["solid", "subtle", "soft"]

componentCode: |
  return alert({
      Color = <color>,
      Variant = <variant>,
      Title = "I am an alert!",
      Description = "And this is my description",
      Icon = "triangle-alert",
      Size = UDim2.new(0, 200, 0, 0),
  })

properties:
  - name: ["Color", "Variant", "AppearanceOverride"]
    description: |
      Use the `Color`, `Variant` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.
      Available variants differ per color and can be viewed in the UI demo below.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` and `Variant` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Title"
    type: |
      fusion.CanBeState<string | [text.text](/components/base/text/#type-text)>
    description: "The title of the alert."
  - name: "Description"
    type: |
      fusion.CanBeState<string | [text.text](/components/base/text/#type-text)>
    description: "The description of the alert."
  - name: "Icon"
    type: |
      [icon.icon](/components/base/icon/#type-icon)
    description: |
      The icon to display on the left side of the alert.
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: Title
    description: "The title of the alert. This will overwrite the existing title."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: Description
    description: "The description of the alert. This will overwrite the existing description."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: LeadingContent
    description: "Content to be placed before (left of) the title. This will overwrite the icon."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: TrailingContent
    description: |
      Content to be placed after (right of) the description.

      This content tries to justify itself as far right as possible. It also takes
      priority over all other content, pushing the other content away so that it can fit.
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
    uiDemo:
      image: "/alert-leadingslot-light.png"
      imageDark: "/alert-leadingslot-dark.png"
      code: |
        return alert({
            Color = "white",
            Variant = "solid",
            Title = "I am an alert!",
            Description = "And this is my description",
            Icon = "triangle-alert",
            Position = UDim2.fromOffset(16, 16),
            Size = UDim2.new(0, 200, 0, 0),
            Slots = {
                TrailingContent = function(useColor)
                    return button({
                        Color = "red",
                        Variant = "ghost",
                        AppearanceOverride = {
                            Text = useColor("Title", true),
                        },
                        Icon = "x"
                    })
                end
            }
        })
  - name: BottomContent
    description: "Content to be placed below the description."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
    uiDemo:
      image: "/alert-bottomslot-light.png"
      imageDark: "/alert-bottomslot-dark.png"
      code: |
        return alert({
            Color = "white",
            Variant = "solid",
            Title = "I am an alert!",
            Description = "And this is my description",
            Icon = "triangle-alert",
            Position = UDim2.fromOffset(16, 16),
            Size = UDim2.new(0, 200, 0, 0),
            Slots = {
            BottomContent = function()
                return New("Frame")({
                    BackgroundTransparency = 1,
                    Size = UDim2.new(0, 0, 0, 0),
                    AutomaticSize = Enum.AutomaticSize.XY,
                    [Children] = {
                        New("UIListLayout")({
                            FillDirection = Enum.FillDirection.Horizontal,
                            HorizontalAlignment = Enum.HorizontalAlignment.Left,
                            Padding = UDim.new(0, 4),
                            SortOrder = Enum.SortOrder.LayoutOrder,
                            VerticalAlignment = Enum.VerticalAlignment.Top,
                        }),
                        button({
                            Color = "emerald",
                            Variant = "solid",
                            ButtonText = "Accept",
                        }),
                        button({
                            Color = "red",
                            Variant = "outline",
                            ButtonText = "Decline",
                        })
                    },
                })
            end
        })

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
    - name: "Stroke"
    - name: "Title"
    - name: "Description"
---

<ComponentView :frontmatter="$frontmatter"/>
