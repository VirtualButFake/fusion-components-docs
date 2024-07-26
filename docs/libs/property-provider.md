---
outline: [1, 3]

name: Property Provider
description: Easily isolate and apply instance properties to components.

functions:
  - name: "getProps"
    code: |
      propertyProvider.getProps(
        props: { [any]: any },
        instanceType: string
      ): { [string]: any }
    description: |
        Given a table, this function isolates the properties that fit the instance type.
        This is especially useful for hydrating components with properties passed by the user.
  - name: "getPropsAndSpecialKeys"
    code: |
        propertyProvider.getPropsAndSpecialKeys(
            props: { [any]: any },
            instanceType: string
        ): { [any]: any }
    description: |
        Given a table, this function isolates the properties that fit the instance type and all special keys passed.
        This is useful in cases where the component should have a large amount of flexibility.
---

<ComponentView :frontmatter="$frontmatter"/>
