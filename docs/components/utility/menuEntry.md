---
outline: [1, 3]

name: MenuEntry

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default"]
  - name: "Gray"
    identifier: "gray"
    variants: ["default"]
  - name: "White"
    identifier: "white"
    variants: ["default"]
  - name: "Black"
    identifier: "black"
    variants: ["default"]

componentCode:

properties:
  - name: "Option"
    type: "[option](#type-option)?"
  - name: "AppearanceOverride"
    type: "[theme.optionalColorTable](/libs/theme-framework/#type-optionalColorTable)?"
  - name: "FallbackColor"
    type: "fusion.CanBeState<string>?"
    description: "The color to use when no color is provided by the option. All tailwind colors are available."
  - name: "Pressing"
    type: "fusion.CanBeState<boolean>?"
  - name: "Selected"
    type: "fusion.CanBeState<boolean>?"
  - name: "Interactable"
    type: "fusion.CanBeState<boolean>?"
    description: "Whether the menu entry should be interactable. This disables hovering and pressing."
  - name: "OnClick"
    type: "(() -> any?)?"
  - name: "OnMouseButton1Changed"
    type: "((isPressed: boolean) -> any?)?"
  - name: "OnHover"
    type: "((isHovering: boolean) -> any)?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

  - name: "option.Color"
    type: "fusion.CanBeState<string>?"
    description: "The color of the menu entry. All tailwind colors are available."
  - name: "option.AppearanceOverride"
    type: "fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework/#type-optionalColorTable)>?"
  - name: "option.Static"
    type: "fusion.CanBeState<boolean>?"
    description: |
      A "static" menu entry is one that does not respond to any events and cannot be selected.
      It will always appear in it's base state.
  - name: "option.Disabled"
    type: "fusion.CanBeState<boolean>?"
  - name: "option.Label"
    type: "fusion.CanBeState<string> | [text.text](/components/base/text.md#type-text)"
  - name: "option.LabelFullSize"
    type: "boolean?"
    description: "Whether the label should take up the full size available instead of sizing to its content."
  - name: "option.Icon"
    type: "fusion.CanBeState<string>? | [icon.icon](/components/base/icon.md#type-icon)?"
  - name: "option.Slots"
    type: "[slots](#type-slots)?"
    description: "Slots for the menu entry. These slots are identical to the top-level slots, but can instead be specified through the option. **However, the top-level slots will take precedence.**"

slots:
  - name: "Left"
    description: "Content to be placed before (left of) the label, overwriting the set icon."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option) -> fusion.CanBeState<{ any }>)?"
  - name: "Center"
    description: "Content to be placed in the middle of the label, overwriting the default content."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option) -> fusion.CanBeState<{ any }>)?"
  - name: "Right"
    description: "Content to be placed after (right of) the label."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option) -> fusion.CanBeState<{ any }>)?"
  - name: "Wrapper"
    description: "A slot to wrap the entire menu entry in a component. This is especially useful for adding tooltips or other content that should be displayed when interacting with the menu entry."
    type: "((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option, component: Frame) -> fusion.CanBeState<{ any }>)?"

types:
  - name: "slots"
    type: |
      {
          Left: ((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option) -> fusion.CanBeState<{ any }>)?,
          Center: ((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option) -> fusion.CanBeState<{ any }>)?,
          Right: ((useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction), option: option) -> fusion.CanBeState<{ any }>)?,
          Wrapper: ((
              useColor: [theme.useColorFunction](/libs/theme-framework#type-useColorFunction),
              option: option,
              component: Frame
          ) -> fusion.CanBeState<{ any }>)?,
      }
  - name: "option"
    type: |
      {
          Color: fusion.CanBeState<string>?,
          AppearanceOverride: fusion.CanBeState<[theme.optionalColorTable](/libs/theme-framework/#type-optionalColorTable)>?,
          Label: fusion.CanBeState<string> | [text.text](/components/base/text.md#type-text),
          LabelFullSize: boolean?,
          Icon: fusion.CanBeState<string>? | [icon.icon](/components/base/icon.md#type-icon)?,
          Static: fusion.CanBeState<boolean>?,
          Disabled: fusion.CanBeState<boolean>?,
          Slots: [slots](#type-slots)?,
      }

theming:
  states:
    - name: "Base"
    - name: "Hover"
    - name: "Pressing"
    - name: "Selected"
    - name: "SelectedDisabled"
    - name: "Disabled"
  colors:
    - name: "Background"
    - name: "Text"
---

<ComponentView :frontmatter="$frontmatter"/>
