/**
 * @author Herbert Chow
 * @date 2018-11-21
 * @description 菜单配置
 */

import GLOBALTEXT from "@appSrc/assets/text/global-text";

const MENUCONFIG = {
    INDEXHOME: [
        {
            name: GLOBALTEXT.MENU.INDEXHOME,
            icon: "laptop",
            link: "/",
        },
        {
            name: GLOBALTEXT.MENU.OVERVIEW,
            icon: "user",
            link: null,
            subMenu: [
                {
                    name: GLOBALTEXT.MENU.USER,
                    link: "/User",
                },
                {
                    name: GLOBALTEXT.MENU.SALES,
                    link: "/Sale",
                },
            ]
        }
    ],
    FLOWANALYSIS: [
        {
            name: GLOBALTEXT.MENU.FLOWANALYSIS,
            icon: "notification",
            link: null,
            subMenu: [
                {
                    name: GLOBALTEXT.MENU.FLOW,
                    link: "/FlowAnalysis",
                },
                {
                    name: GLOBALTEXT.MENU.FUNNEL,
                    link: "/Funnel",
                },
            ]
        },
        {
            name: GLOBALTEXT.MENU.OTHERANALYSIS,
            icon: "desktop",
            link: null,
            subMenu: [
                {
                    name: GLOBALTEXT.MENU.EVENTSANALYSIS,
                    link: "/Event",
                },
                {
                    name: GLOBALTEXT.MENU.LANDINGANALYSIS,
                    link: "/Landed",
                },
            ]
        },
    ],
    REPORTSHEET: [
        {
            name: GLOBALTEXT.MENU.REPORTANALYSIS,
            icon: "pie-chart",
            link: null,
            subMenu: [
                {
                    name: GLOBALTEXT.MENU.COMPREHENSIVEREPORT,
                    link: "/DataIndex",
                },
                {
                    name: GLOBALTEXT.MENU.PRODUCTREPORT,
                    link: "/Product",
                },
            ]
        }
    ]
};

export default MENUCONFIG;
