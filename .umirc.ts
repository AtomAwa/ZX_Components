import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'ZiUI',
  mode: 'site',
  // more config: https://d.umijs.org/config
  locales: [['zh-CN', '中文']],
  logo: '/image/logo.svg',
  favicon: '/image/logo.svg',
  theme:{
    '@c-primary': '#45124e',
  },
  styles:[
    `
    .__dumi-default-navbar-logo{
      background-size: 57px!important;
      background-position: center left!important;
      background-repeat: no-repeat!important;
      padding-left: 70px!important;/*可根据title的宽度调整*/
      font-size: 22px!important;
      color: #000!important;
      font-weight: lighter!important;
    }
  
    .__dumi-default-layout-hero{
      background-image: url(//img.alicdn.com/imgextra/i4/O1CN01ZcvS4e26XMsdsCkf9_!!6000000007671-2-tps-6001-4001.png);
      background-size: cover;
      background-repeat: no-repeat;
      padding: 120px 0 !important;
    }
    .__dumi-default-layout-hero h1{
      color:#45124e !important;
      font-size:80px !important;
      padding-bottom: 30px !important;
    }
    .__dumi-default-navbar{
      padding: 0 28px !important;
    }
    `,
  ],

  navs:[
    {title: '快速上手', path: '/starts'},
    {title: '组件库', path: '/coms'},
    {title: '项目规范库',path: '',children:[
      {title: '通用',path:''},
      {title: '紫鸟浏览器',path:''},
    ]},
  ],
  menus:{
  '/coms':[
      {
        title:'General 通用',
        children:['/coms/button','/coms/icon'],
      },
      {
        title:'Navigation 导航',
        children:['/coms/breadcrumb.zh-CN.md','/coms/dropdown.zh-CN.md','/coms/menu.zh-CN.md',
        '/coms/pageheader.zh-CN.md','/coms/pagination.zh-CN.md','/coms/steps.zh-CN.md',],
      },
      {
        title:'Data Entry 数据录入',
        children:['/coms/cascader.zh-CN.md','/coms/checkbox.zh-CN.md','/coms/datepicker.zh-CN.md',
        '/coms/form.zh-CN.md','/coms/input.zh-CN.md','/coms/radio.zh-CN.md','/coms/rate.zh-CN.md',
        '/coms/select.zh-CN.md','/coms/slider.zh-CN.md','/coms/switch.zh-CN.md','/coms/timepicker.zh-CN.md',
        '/coms/transfer.zh-CN.md','/coms/treeselect.zh-CN.md','/coms/upload.zh-CN.md',],
      },
      {
        title:'Data Display 数据展示',
        children:['/coms/avatar.zh-CN.md','/coms/badge.zh-CN.md','/coms/calendar.zh-CN.md','/coms/card.zh-CN.md',
        '/coms/carousel.zh-CN.md','/coms/collapse.zh-CN.md','/coms/comment.zh-CN.md','/coms/descriptions.zh-CN.md',
        '/coms/empty.zh-CN.md','/coms/list.zh-CN.md','/coms/popover.zh-CN.md','/coms/statistic.zh-CN.md',
        '/coms/table.zh-CN.md','/coms/tabs.zh-CN.md','/coms/tag.zh-CN.md','/coms/timeline.zh-CN.md',
        '/coms/tooltip.zh-CN.md','/coms/tree.zh-CN.md']
      },
      {
        title:'Feed back 反馈',
        children:['/coms/alert.zh-CN.md','/coms/drawer.zh-CN.md','/coms/message.zh-CN.md','/coms/modal.zh-CN.md',
        '/coms/notification.zh-CN.md','/coms/popconfirm.zh-CN.md','/coms/progress.zh-CN.md','/coms/resultpage.zh-CN.md',
        '/coms/skeleton.zh-CN.md','/coms/spin.zh-CN.md'],
      },
      {
        title:'Other 其他',
        children:['/coms/anchor.zh-CN.md','/coms/backtop.zh-CN.md']
      }
      
    ]
  }

  
});

