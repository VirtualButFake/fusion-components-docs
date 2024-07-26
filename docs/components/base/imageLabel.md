---
outline: [1, 3]

name: ImageLabel
description: A base ImageLabel with an Appearance property for easy theming.

properties:
  - name: "Appearance"
    type: "fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?"
  - name: "Image"
    type: "fusion.CanBeState<string>"
  - name: "TweenSettings"
    description: "The tween settings for transitioning between appearances."
    type: "TweenInfo?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `ImageLabel`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
---

<ComponentView :frontmatter="$frontmatter"/>
