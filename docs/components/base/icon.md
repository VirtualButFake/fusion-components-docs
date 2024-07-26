---
outline: [1, 3]

name: Icon
description: A simple icon that can be used to show either a Lucide icon or Roblox assets.

properties:
  - name: "Icon"
    type: |
      [icon](#type-icon)
    description: |
      The name of the icon to show.
  - name: "Color"
    type: "fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `ImageLabel`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
    
types:
  - name: "icon"
    description: |
      These icons can be either a Lucide icon or a Roblox asset.
      The complete list of icons can be found [here](https://github.com/VirtualButFake/lucide-roblox/blob/master/md/icon-index.md).

      The size of the icon can be changed by using the `Size` property.
      The sizes available by default are `12px`, `16px`, `24px`, `48px` and `64px`. When using a Lucide icon, the closest size is selected.

      When a string is passed, the default size is `16px`.
    type: |
      string | {
          Name: string,
          Size: number
      }
---

<ComponentView :frontmatter="$frontmatter"/>
