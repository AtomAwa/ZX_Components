---
title: Button 按钮
---
# Button 按鈕
按钮用于开启一个闭环的操作任务，如“删除”对象、“购买”商品等




```jsx
/**
 * inline: true
 */
import React from 'react';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import { Image } from 'antd';

const { TabPane } = Tabs;
export default () =>(
      //<Button type="primary">新建</Button>
      <Tabs type="card">
      <TabPane tab="组件样式" key="1">
          <Image  src="/other/components/button_.jpg" preview={false}/>
      </TabPane>
      <TabPane tab="使用指南" key="2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </TabPane>  
    </Tabs>
);

```



