---
outline: [1, 3]

name: Await
description: A component that displays temporary content while waiting for data to load.

usage: |
    An `Await` takes a `Loaded` property. This determines whether temporary content should be displayed or not. 
    As such, when paired with a [`Skeleton`](/components/common/skeleton), it makes an especially powerful tool for displaying loading states.

properties:
  - name: "Loaded"
    type: "fusion.StateObject<boolean>"
  - name: "TemporaryContent"
    type: "fusion.CanBeState<{ any }>"
  - name: "Children"
    type: "fusion.CanBeState<{ any }>"
---

<ComponentView :frontmatter="$frontmatter"/>
