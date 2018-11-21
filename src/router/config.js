import GLOBALTEXT from "@appSrc/assets/text/global-text";

export default [
    // 主路由
    {
        route: "/Register",
        title: GLOBALTEXT.COMPONENTS.REGISTER,
        component: "Register"
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
            },
            {
                route: "/FlowAnalysis",
                title: GLOBALTEXT.COMPONENTS.FLOWANALYSIS,
                component: "FlowAnalysis"
            },
            {
                route: "/ReportSheet",
                title: GLOBALTEXT.COMPONENTS.REPORTSHEET,
                component: "ReportSheet"
            }
        ]
    }
];
