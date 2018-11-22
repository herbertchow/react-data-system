import React, { Component } from "react";

// import ReactDOM from 'react-dom';
// import echarts from "echarts";
import { Link } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";
import MENUCONFIG from "@appSrc/router/menu";
import "./Hbmenu.less";

const { SubMenu } = Menu;
const { Sider } = Layout;

// import "element-theme-default";

class Hbmenu extends Component {
    render() {
        const { nameSpace } = this.props;

        let root = MENUCONFIG[nameSpace];
        let parentRoot = root.filter(item => {
            return !!item.subMenu;
        });
        return (
            <Sider
                className="hb-menu"
                width={200}
                style={{ background: "#fff" }}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[root[0].name]}
                    defaultOpenKeys={[...parentRoot.map(item => item.name)]}
                    style={{ height: "100%", borderRight: 0 }}
                >
                    {root.map(rItem => {
                        if (!rItem.subMenu) {
                            return (
                                <Menu.Item key={rItem.name}>
                                    {rItem.icon ? (
                                        <Icon type={rItem.icon} />
                                    ) : (
                                        ""
                                    )}
                                    {rItem.link ? (
                                        <span className="full-span">
                                            <Link to={rItem.link}>
                                                {rItem.name}
                                            </Link>
                                        </span>
                                    ) : (
                                        <span>{rItem.name}</span>
                                    )}
                                </Menu.Item>
                            );
                        } else if (!!rItem.subMenu) {
                            return (
                                <SubMenu
                                    key={rItem.name}
                                    title={
                                        <span>
                                            {rItem.icon ? (
                                                <Icon type={rItem.icon} />
                                            ) : (
                                                ""
                                            )}
                                            <span>{rItem.name}</span>
                                        </span>
                                    }
                                >
                                    {rItem.subMenu.map(rItem2 => {
                                        return (
                                            <Menu.Item key={rItem2.name}>
                                                {rItem2.link ? (
                                                    <span className="full-span">
                                                        <Link to={rItem2.link}>
                                                            {rItem2.name}
                                                        </Link>
                                                    </span>
                                                ) : (
                                                    <span>{rItem2.name}</span>
                                                )}
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        } else {
                            return "";
                        }
                    })}
                </Menu>
            </Sider>
        );
    }
}

export default Hbmenu;
