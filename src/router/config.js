export default [
    // 主路由
    {
        route: "/Register",
        title: "注册",
        component: "Register"
    },
    { route: "/Login", title: "登录", component: "Login" },
    { route: "/404", title: "404", component: "Common404" },
    {
        route: "/",
        title: "首页",
        componentName: "App",
        children: [
            { route: "/", title: "首页", component: "IndexHome" },
            {
                route: "/FlowAnalysis",
                title: "流量",
                component: "FlowAnalysis"
            },
            {
                route: "/ReportSheet",
                title: "报表",
                component: "ReportSheet"
            }
        ]
    }
];