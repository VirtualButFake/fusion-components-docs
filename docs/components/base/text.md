---
outline: [1, 3]

name: Text

properties:
  - name: "Appearance"
    type: "fusion.CanBeState<[themeFramework.color](/libs/theme-framework#type-color)>?"
  - name: "Text"
    type: |
      fusion.CanBeState<string> | [text](#type-text)
  - name: "TweenSettings"
    description: "The tween settings for transitioning between appearances."
    type: "TweenInfo?"
  - name: "Instance Properties"
    description: "This instance takes all the properties of a `TextLabel`. `SpecialKeys`, such as `fusion.Children` will also be passed to the instance."
    
types:
  - name: "text"
    type: |
        {
            Label: fusion.CanBeState<string>,
            Font: fusion.CanBeState<Font>,
            TextSize: fusion.CanBeState<number>,
        }
---

<ComponentView :frontmatter="$frontmatter"/>
