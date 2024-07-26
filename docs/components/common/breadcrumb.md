---
outline: [1, 3]

name: Breadcrumb
description: A component that allows users to navigate through a hierarchy of links.

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: ["default"]

componentCode: |
  return breadcrumb({
      Color = <color>,
      Labels = {
          {
              Text = "Home",
              Icon = "home",
          },
          {
              Text = "About",
              Icon = "info",
          },
          {
              Text = "Contact",
              Icon = "mail",
          }
      }
  })

properties:
  - name: ["Color", "AppearanceOverride"]
    description: |
      Use the `Color` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Labels"
    type: fusion.CanBeState<{ [label](#type-label) }>
    description: "The labels to display in the breadcrumb."
  - name: "Divider"
    type: fusion.CanBeState<string | Instance>?
    description: |
      The divider between labels.
      This can be either a string (Lucide icon or Roblox asset id) with forced size 16x16 or a custom instance.
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

types:
  - name: "label"
    type: |
      {
          Text: fusion.CanBeState<string> | [text.text](/components/base/text/#type-text),
          Icon: fusion.CanBeState<string>?,
          Content: fusion.CanBeState<Instance>?,
          OnClick: () -> ()?,
      }

theming:
  states:
    - name: "Base"
    - name: "Hover"
    - name: "Selected"
  colors:
    - name: "Text"
---

<ComponentView :frontmatter="$frontmatter"/>
