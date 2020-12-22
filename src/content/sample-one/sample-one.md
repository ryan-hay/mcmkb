---
slug: sample-one
title: Sample One Blog Post
author: Ryan Hay
description:
  Description for Sample One Blog Post. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin
  nibh sit amet commodo. Dictum varius duis at consectetur. Et odio pellentesque diam
  volutpat commodo sed egestas egestas. Mauris pharetra et ultrices neque. Amet
  consectetur adipiscing elit pellentesque.
date: 2020-11-01
categories: developer
heroImageName: mcm.png
---

## Headings

# Heading 1

## Heading 2

### Heading 3

## Text

<br />

Normal text

<br />

_Emphasis_

<br />

_**Bold & Underscore**_

<br />

~~Strike Through~~

<br /><br /><br /><br /><br />

## Links

www.example.com

[Example](www.example.com)

## Images

![MCM Overall Solution Capability]('./assets/mcm.png')

## Embed (YouTube)

<br />

<iframe width="560" height="315" src="https://www.youtube.com/embed/d03xg2PKOPg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Code

```jsx
import React from 'react'

const CoolComponent = () => {
  console.log('test')
  return <div>I'm a cool component!!</div>
}

export default CoolComponent
```

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.22.100-192.168.22.130
```

## Table

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

## Lists

### Unordered

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

### Tasklist

- [ ] to do
- [x] done

## Blockquotes

> This is the start This is the next start

## Emoji

👍🏼😀
