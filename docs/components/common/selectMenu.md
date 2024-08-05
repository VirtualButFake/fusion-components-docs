---
outline: [1, 3]

name: SelectMenu
needsLayer: true
description: A component that allows the user to select options from a dropdown.

colors:
  - name: "Example Color"
    identifier: "gray"
    variants: ["default"]

componentCode: |
  local options = fusion.Value({
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
      {
          Id = "Value 5",
      },
  })

  local selectedOptions = fusion.Value({
      "Value 1",
  })

  return New("Frame")({
      BackgroundTransparency = 1,
      Size = UDim2.fromOffset(300, 300),
      [Children] = {
          selectMenu({
              Color = <color>,
              Variant = <variant>,
              MaxHeight = 4,
              Options = options,
              Creatable = true,
              OnCreate = function(query)
                  local currentOptions = options:get()
                  table.insert(currentOptions, {
                      Id = query,
                  })

                  options:set(currentOptions)
              end,
              OnOptionClicked = function(option)
                  local currentSelectedOptions = table.clone(selectedOptions:get())
                  local index = table.find(currentSelectedOptions, option)

                  if index then
                      table.remove(currentSelectedOptions, index)
                  else
                      table.insert(currentSelectedOptions, option)
                  end

                  selectedOptions:set(currentSelectedOptions)
              end,
              Position = UDim2.fromOffset(54, 54),
              SelectedOptions = selectedOptions,
              Size = UDim2.fromOffset(200, 20),
              Searchable = true,
          }),
      },
  })

properties:
  - name: ["Color", "Variant", "AppearanceOverride"]
    description: |
      This component uses styling from the [Input](/components/common/input) component, and as such, the `Color`, `Variant`, and `AppearanceOverride` properties are passed to the `Input` component.

      Information for styling the `Input` component can be found [here](/components/common/input/#property-Color,Variant,AppearanceOverride).

      The UI demo below only has one color available, but Input has more colors available.
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
  - name: "SearchQuery"
    type: "fusion.CanBeState<string>?"
  - name: "Search"
    type: "((query: string, options: { [option](#type-option) }) -> { [option](#type-option) })?"
  - name: "Searchable"
    type: "fusion.CanBeState<boolean>?"
  - name: "SearchPlaceholder"
    type: "fusion.CanBeState<string>?"
  - name: "Placement"
    type: "[popover.placement](/components/common/popover/#type-placement)?"
  - name: "Options"
    type: "fusion.CanBeState<{ [option](#type-option) }>"
  - name: "SelectedOptions"
    tags: ["one-way"]
    type: "fusion.CanBeState<{ string }>?"
  - name: "Placeholder"
    type: "fusion.CanBeState<string>?"
  - name: "Multiple"
    type: "fusion.CanBeState<boolean>?"
  - name: "Creatable"
    type: "fusion.CanBeState<boolean>?"
  - name: "CreatableWhen"
    description: |
      If `Creatable` is set to `true`, this value determines when to show the button to create a new option. 

      `empty`: The button is shown when there are no visible options.
      `always`: The button is always shown.
      `function`: This function is called with the current search query. If it returns `true`, the button is shown.
    type: '("empty" | "always" | ((query: string) -> boolean))?'
  - name: "OnCreate"
    description: "This function is called when the user creates a new option. The function is passed the query that the user entered. The function should insert the new option into an `Options` value itself."
    type: "((query: string) -> nil)?"
  - name: "OnOptionClicked"
    type: "(id: string, isVisible: fusion.Value<boolean>) -> nil"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:
  - name: "LeftInput"
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework/#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: "Label"
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework/#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: "RightInput"
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework/#type-useColorFunction)) -> fusion.CanBeState<{ any }>)?"
  - name: "CreateOption"
    description: "This appears when `Creatable` is set to `true` and the conditions in `CreatableWhen` are met. Something to note is that this slot *completely* replaces the default create option, so `OnCreate` will not be called. Make sure to account for this in your custom create option."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework/#type-useColorFunction), query: string) -> fusion.CanBeState<{ any }>)?"

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
