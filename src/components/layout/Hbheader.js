import React, { Component } from "react";
import logo from "../../logo.svg";

import { Menu, Popover, Button, Icon } from "antd";

import "./Hbheader.less";

class Hbheader extends Component {
    render() {
        const options = [
            { label: "首页", value: "首页" },
            { label: "流量", value: "流量" },
            { label: "报表", value: "报表" }
        ];
        return (
            <div className="hb-header">
                <div className="hb-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="hb-top-menu">
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "40px", height: "40px" }}
                    >
                        {options.map(item => {
                            return (
                                <Menu.Item key={item.value} value={item.value}>
                                    {item.label}
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </div>
                <div className="hb-user-info">
                    <Popover overlayClassName="hb-user-select" content={'退出登录'} trigger="click">
                        <Button type="default" className="hb-user-selectbtn">
                            <Icon type="user" theme="outlined"/>
                            周逆天
                        </Button>
                    </Popover>
                </div>
            </div>
        );
    }
}

export default Hbheader;
