---
outline: [1, 3]

name: InputMenu
needsLayer: true
description: A component that provides built-in autocomplete given a list of options.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default", "outline", "transparent"]
  - name: "Gray"
    identifier: "gray"
    variants: ["default", "outline", "transparent"]

componentCode: |
  local value = fusion.Value("")

  return inputMenu({
      Color = <color>,
      Variant = <variant>,
      MaxHeight = 3,
      Placeholder = "Placeholder",
      SelectedOption = value,
      OnOptionSelected = function(id)
          value:set(id)
      end,
      Options = {
          {
              Id = "Value 1",
          },
          {
              Id = "Value 2",
          },
          {
              Id = "Value 3",
          },
          {
              Id = "Value 4",
          },
      },
      Size = UDim2.fromOffset(100, 20),
  })
properties:
  - name: ["Color", "Variant", "AppearanceOverride"]
    description: |
      This component uses styling from the `[Input](/components/common/input)` component, and as such, the `Color`, `Variant`, and `AppearanceOverride` properties are passed to the `Input` component.

      Information for styling the `Input` component can be found [here](/components/common/input/#property-Color,Variant,AppearanceOverride).
    showUIDemo: true
  - name: "PopoverAppearanceOverride"
    description: "The appearance override for the popover. Theming information can be found [here](/components/common/popover/#theming)."
    type: "fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework/#type-optionalColorTable)>?"
  - name: "EntryAppearanceOverride"
    description: "The appearance override for Menu Entries in the dropdown. Theming information can be found [here](/components/utility/menuEntry/#theming)."
    type: "fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework/#type-optionalColorTable)>?"
  - name: "Disabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "Visible"
    type: "fusion.CanBeState<boolean>?"
  - name: "MaxHeight"
    type: "number?"
  - name: "ToggleIcon"
    type: "fusion.CanBeState<string>? | [icon.icon](/components/base/icon/#type-icon?"
  - name: "SelectedIcon"
    type: "fusion.CanBeState<string>? | [icon.icon](/components/base/icon/#type-icon)?"
  - name: "Search"
    type: "((query: string, options: { option }) -> { option })?"
  - name: "Placeholder"
    type: "fusion.CanBeState<string>?"
  - name: "Query"
    type: "fusion.CanBeState<string>?"
    description: "The query to search for. This goes two ways, meaning that it gets updated through the component and can be updated from the outside."
  - name: "SelectedOption"
    tags: ["one-way"]
    type: "fusion.CanBeState<string>?"
  - name: "Placement"
    type: "[popover.placement](/components/common/popover/#type-placement)?"
  - name: "Options"
    type: "fusion.CanBeState<{ [option](#type-option) }>"
  - name: "OnOptionSelected"
    type: "((id: string) -> nil)?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: "Left"
    description: "A slot for the left side of the input, where the selected option's icon is normally shown. "
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), selectedOption: fusion.Computed<[option](#type-option)?>) -> fusion.CanBeState<{ any }>)?"

types:
  - name: "option"
    type: |
        [menuEntry.option](/components/utility/menuEntry/#type-option) & {
            Id: string,
            Slots: {
                Left: ((useColor: [theme.useColorFunction](/libs/theme-framework/#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?,
                Center: ((useColor: [theme.useColorFunction](/libs/theme-framework/#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?,
            }?,
        }
---

<ComponentView :frontmatter="$frontmatter"/>
