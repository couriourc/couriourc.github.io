author: couriourc
title: CSS3 transformer 失效现象
categories:
  - 公司经历以及问题记录
nanoid: rV_E2xGCtaWaTTIjl2Xz5
date created: 2023-04-13 00:00:00
date modified: 2023-06-21 00:00:00
---

CSS 动画,color 属性能够生效，transform 属性却没能生效。

最后在样式中设置了display:inline-block就搞定了  

[CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms-1/)

> 原文  
transformable element  
A transformable element is an element in one of these categories:  
an element whose layout is governed by the CSS box model which is either a block-level or atomic inline-level element,or whose display property computes to table-row, table-row-group, table-header-group, table-footer-group, table-cell, or table-caption [CSS21]  
an element in the SVG namespace and not governed by the CSS box model which has the attributes transform, ‘patternTransform‘ or gradientTransform [SVG11].

> 原文  
> Inline-level elements and inline boxes
>
> Inline-level elements are those elements of the source document that do not form new blocks of content; the content is distributed in lines (e.g., emphasized pieces of text within a paragraph, inline images, etc.). The following values of the ‘display’ property make an element inline-level: ‘inline’, ‘inline-table’, and ‘inline-block’. Inline-level elements generate inline-level boxes, which are boxes that participate in an inline formatting context.
>
> An inline box is one that is both inline-level and whose contents participate in its containing inline formatting context. A non-replaced element with a ‘display’ value of ‘inline’ generates an inline box. Inline-level boxes that are not inline boxes (such as replaced inline-level elements, inline-block elements, and inline-table elements) are called atomic inline-level boxes because they participate in their inline formatting context as a single opaque box.
>
