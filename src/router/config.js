/**
 * @author Herbert Chow
 * @date 2018-11-10
 * @description 路由配置
 * @last modify 2018-11-22
 * nameSpace 对应./menu.js中的主菜单模块位置
 */

import GLOBALTEXT from "@appSrc/assets/text/global-text";

export default [
    // 主路由
    {
        route: "/Register",
        title: GLOBALTEXT.MENU.REGISTER,
        component: "Register",
    },
    { route: "/Login", title: GLOBALTEXT.MENU.LOGIN, component: "Login" },
    { route: "/404", title: "404", component: "Common404" },
    {
        route: "/",
        title: GLOBALTEXT.MENU.INDEXHOME,
        componentName: "App",
        children: [
            {
                route: "/",
                title: GLOBALTEXT.MENU.INDEXHOME,
                component: "IndexHome",
                nameSpace:'INDEXHOME',
            },
            {
                route: "/FlowAnalysis",
                title: GLOBALTEXT.MENU.FLOWANALYSIS,
                component: "FlowAnalysis",
                nameSpace:'FLOWANALYSIS',
            },
            {
                route: "/ReportSheet",
                title: GLOBALTEXT.MENU.REPORTSHEET,
                component: "ReportSheet",
                nameSpace:'REPORTSHEET',
            },
            {
                route: "/Sale",
                title: GLOBALTEXT.MENU.SALE,
                component: "Sale",
                nameSpace:'INDEXHOME',
            },
            {
                route: "/User",
                title: GLOBALTEXT.MENU.USER,
                component: "User",
                nameSpace:'INDEXHOME',
            },
        ]
    }
];
