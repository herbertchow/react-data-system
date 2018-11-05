import React, { Component } from "react";
import logo from "../../logo.svg";
import { Link, withRouter } from "react-router-dom";
import { Menu, Popover, Button, Icon } from "antd";

import "./Hbheader.less";

class Hbheader extends Component {

    render() {
        const navList = {
            "/" : "1",
            "/FlowAnalysis" : "2",
            "/ReportSheet" : "3",
        };
        let stateRoute = this.props.location.pathname;

        return (
            <div className="hb-header">
                <div className="hb-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-logo-text">赫伯特数据</span>
                </div>
                <div className="top-menu-wrap">
                    <Menu
                        className="top-menu"
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[navList[stateRoute]]}
                    >
                        <Menu.Item key="1">
                            <Link replace to="/">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link replace to="/FlowAnalysis">流量</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link replace to="/ReportSheet">报表</Link>
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

export default withRouter(Hbheader);
