import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Translation from './containers/Translation';
import NotFound from './containers/NotFound'
import App from './App';

// 当我加载显示HOME组件之前，我希望调用Home.loadData方法，提前获取到必要的异步数据
// 然后再做服务器端渲染，把页面返回给用户
export default [
    {
        path:'/',
        component: App,
        loadData:App.loadData,
        routes:[
            {
                path: '/',
                component: Home,
                exact: true,
                loadData: Home.loadData,
                key: 'home'
            },{
                path: '/Translation',
                component: Translation,
                exact: true,
                loadData: Translation.loadData,
                key: 'translation'
            },{
                component: NotFound
            }
        ]
    }
]

