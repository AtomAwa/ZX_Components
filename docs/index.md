---
hero:
  title: ZiUX-紫讯组件库
  desc: 从原型到产品的设计过程<br />使用我们的设计系统更好的构建跨境电商的应用程序
  actions:
    - text: 快速上手
      link: ./starts
features:
  - icon: ./image/h_fast.svg
    title: 每个人都可以访问
    desc: 使用高对比度、色盲安全调色板，并通过大多数辅助技术进行测试。
  - icon: ./image/h_zhuanye.svg
    title: 灵活且可组合
    desc: 可配置得足以满足各种环境的需求，同时保持品牌和低级一致性。
  - icon: ./image/h_box.svg
    title: 开箱即用
    desc: 开箱即用的高质量 React 组件,提炼自企业级中后台产品的交互语言和视觉风格
footer: Open-source MIT Licensed | Copyright © 2023<br />Powered by 致茧Zhijian-Design
---

```tsx
/**
 * inline: true
 */
import React from 'react'
import { Section } from './site/Section'
import './site/styles.less'
export default () => (
  <Section
    title="拖拽搭建，高效设计"
    style={{ marginTop: 40 }}
    titleStyle={{ paddingBottom: 140 }}
    scale={1.2}
  >
    <a href="getting-started">
      <img src="./image/h_des_use.png" />
    </a>
  </Section>
)
```

```jsx
/**
 * inline: true
 */

import React from 'react';
import { Section } from './site/Section'
import './site/styles.less'

export default () => (
  <Section
    title="傻瓜写法，超高性能"
    style={{ marginTop: 140 }}
    titleStyle={{ paddingBottom: 100 }}
  >
    <iframe
      className="codesandbox"
      src="https://codesandbox.io/embed/formilyyaliceshi-vbu4w?fontsize=12&module=%2FApp.tsx&theme=dark"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </Section>
)
```