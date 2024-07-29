---
outline: [1, 3]

name: ContextMenu
needsLayer: true
description: A dynamic context menu that can contain anything from menu entries to custom content.

usage: |
  This component takes 2 parameters: the object and the ContextMenu properties. 
  The object is the object around which the context menu is wrapped. 
  Right clicking this object will result in the context menu opening.
  This object has to be part of a [layer](/libs/top-layer-provider/#type-layer) to function, which can be created through [topLayerProvider.new](/libs/top-layer-provider#function-new).

  The original object is returned through the function and is only used to find the closest [layer](/libs/top-layer-provider/#type-layer) to display the context menu on.

colors:
  - name: "Any"
    identifier: "gray"
    variants: ["default", "transparent"]

componentCode: |
  -- You don't have to create a new layer each time, this is just an example.
  local frame = fusionUtils.topLayerProvider.new(
      New("Frame")({
          BackgroundTransparency = 1,
          Size = UDim2.new(0, 500, 0, 300),
      })
  )

  return contextMenu(
      frame,
      {
          Color = <color>,
          Variant = <variant>,
          Options = {
              {
                  {
                      Label = "Create",
                      Icon = "plus"
                  },
                  {
                      Label = "Edit",
                      Icon = "pencil",
                      Options = {
                          {
                              {
                                  Label = "Rename",
                                  Disabled = true,
                                  Icon = "pen"
                              },
                              {
                                  Label = "Color",
                                  Icon = "palette"
                              }
                          }
                      }
                  }
              },
              {
                  {
                      Icon = "trash",
                      Label = "Delete",
                      Slots = {
                          Wrapper = function(_, _, menuEntry)
                              return tooltip(
                                  menuEntry,
                                  {
                                      Variant = "default",
                                      FollowMouse = true,
                                      Text = "Clicking this will delete the element",
                                      Padding = 8
                                  }
                              )
                          end
                      }
                  }
              }
          }
      }
  )

properties:
  - name: ["Color", "Variant", "AppearanceOverride"]
    description: |
      Use the `Color`, `Variant` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.
      Available variants differ per color and can be viewed in the UI demo below.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` and `Variant` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).

      There is only one color listed as the color does not directly affect the component, but instead only it's menu entries, due to it being registered as their FallbackColor.
    showUIDemo: true
  - name: "Enabled"
    type: "fusion.CanBeState<boolean>?"
    description: "Whether the context menu can be opened. If set to false while the context menu is open, it will close."
  - name: "Visible"
    type: "fusion.Value<boolean>?"
    description: "Whether the context menu is visible. This bypasses the `Enabled` property."
  - name: "VisibleLogic"
    type: "((toOpen: boolean) -> boolean)?"
    description: "Whenever the context menu is opened via normal means, this function will be called. If it returns false, the context menu will not open. This is useful for defining custom conditions for when the context menu should be opened."
  - name: "Options"
    description: |
      The options that the context menu will display.
      These are grouped by tables. Each different table has a divider between each other.
    type: "{ { [option](#type-option) } }"
  - name: "Position"
    description: "The position of the context menu. If this is set, mouse position is no longer taken into account."
    type: |
      { 
          X: fusion.CanBeState<number>,
          Y: fusion.CanBeState<number>,
      }
  - name: "StateOutput"
    description: |
      A few values that allow you to read and control the state of the context menu.

      Explanation of the values:
      - `Size`: The size of the context menu, in a Vector2. 
      - `Menu`: The menu itself. Can be used to make this menu invisible or read the parent.
      - `ResetPosition`: If set to true, the context menu will calculate a new position. When the context menu is set to visible, it's position is locked. This unlocks it for a split second to reset it.

    type: |
      {
          Size: fusion.Value<Vector2>?,
          Menu: [menu](#type-menu),
          ResetPosition: fusion.Value<boolean>?,
      }
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

types:
  - name: "option"
    type: |
      fusion.CanBeState<
          [menuEntry.option](/components/utility/menuEntry/#type-option) & {
            -- the number determines how many parent context menus to close. -1 closes all, 0 closes none, 1 closes the parent, etc.
            Callback: (() -> number?)?, 
            Options: fusion.CanBeState<{ { option } }>?,
          }
      >
  - name: "menu"
    type: |
      {
          Visible: fusion.Value<boolean>,
          Parent: [menu](#type-menu)?,
      }

theming:
  states:
    - name: "Base"
  colors:
    - name: "Background"
    - name: "Stroke"
    - name: "Text"
    - name: "Shadow"
---

<ComponentView :frontmatter="$frontmatter"/>
