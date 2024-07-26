---
outline: [1, 3]

name: Text Box
description: A simple wrapper around a TextBox with support for theming.

properties:
  - name: "TextAppearance"
    type: "fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?"
  - name: "PlaceholderAppearance"
    type: "fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?"
  - name: "TweenSettings"
    description: "The tween settings for transitioning between appearances."
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `TextBox`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
---

<ComponentView :frontmatter="$frontmatter"/>
