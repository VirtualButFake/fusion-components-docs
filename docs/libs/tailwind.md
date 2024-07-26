---
outline: [1, 3]

name: Tailwind
description: A 1:1 port of Tailwind colors to Roblox.
usage: |
  Using this package is extremely simple; just require it and you're good to go. Every color that is available in Tailwind is available in this package.
  Passing in any value that is not directly linked to a Tailwind color will interpolate between the closest colors. As such, `825`, `550` etc. are all valid values.
types:
  - name: "color"
    type: |
        color = {
            [number]: Color3,
        } | Color3
---

<ComponentView :frontmatter="$frontmatter"/>
