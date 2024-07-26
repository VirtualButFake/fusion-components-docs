---
outline: [1, 3]

name:
description:

usage:

colors:
  - name: "Tailwind Color"
    identifier: "red"
    variants: []

componentCode: |

properties:
  - name: ["Color", "Variant", "AppearanceOverride"]
    description: |
      Use the `Color`, `Variant` and `AppearanceOverride` properties to style the component.

      Available colors are <availableColors>.
      Available variants differ per color and can be viewed in the UI demo below.

      The theme data for the component can be found in the [Theming](#theming) section and can be overwritten through `AppearanceOverride`.

      Pass `Color` and `Variant` as a string and `AppearanceOverride` as an [optionalColorTable](/libs/theme-framework#type-optionalColorTable). More information on overrides can be found [here](/getting-started#appearance-overrides).
    showUIDemo: true
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `Frame`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."

slots:

theming:
  states:
  colors:

types:
---

<ComponentView :frontmatter="$frontmatter"/>
