import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { Menu, Popover, Button, Icon } from "antd";

import "./Hbheader.less";

class Hbheader extends Component {
    render() {
        const options = [
            { label: "首页", value: "1" },
            { label: "流量", value: "2" },
            { label: "报表", value: "3" }
        ];
        return (
            <div className="hb-header">
                <div className="hb-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="top-menu-wrap">
                    <Menu
                        className="top-menu"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                    >
                        <Menu.Item key="1">
                            <Link to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/FlowAnalysis">流量</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to="/">报表</Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="hb-user-info">
                    <Popover
                        overlayClassName="hb-user-select"
                        content={"退出登录"}
                        trigger="click"
                    >
                        <Button type="default" className="hb-user-selectbtn">
                            <Icon type="user" theme="outlined" />
                            周逆天
                        </Button>
                    </Popover>
                </div>
            </div>
        );
    }
}

export default Hbheader;
