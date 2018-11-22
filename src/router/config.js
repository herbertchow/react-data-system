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
        title: GLOBALTEXT.COMPONENTS.REGISTER,
        component: "Register",
    },
    { route: "/Login", title: GLOBALTEXT.COMPONENTS.LOGIN, component: "Login" },
    { route: "/404", title: "404", component: "Common404" },
    {
        route: "/",
        title: GLOBALTEXT.COMPONENTS.INDEXHOME,
        componentName: "App",
        children: [
            {
                route: "/",
                title: GLOBALTEXT.COMPONENTS.INDEXHOME,
                component: "IndexHome",
                nameSpace:'INDEXHOME',
            },
            {
                route: "/FlowAnalysis",
                title: GLOBALTEXT.COMPONENTS.FLOWANALYSIS,
                component: "FlowAnalysis",
                nameSpace:'FLOWANALYSIS',
            },
            {
                route: "/ReportSheet",
                title: GLOBALTEXT.COMPONENTS.REPORTSHEET,
                component: "ReportSheet",
                nameSpace:'REPORTSHEET',
            }
        ]
    }
];
