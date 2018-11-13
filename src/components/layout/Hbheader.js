import React, { Component } from "react";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as actionCreators from "../../redux/action-creators";
import { Menu, Popover, Button, Icon } from "antd";

import "./Hbheader.less";

class Hbheader extends Component {
    constructor(props) {
        super(props);
        this.setLogoutType = this.setLogoutType.bind(this);
    }

    setLogoutType() {
        this.props.dispatch(actionCreators.setLogoutType());
    }

    render() {
        const navList = {
            "/": "1",
            "/FlowAnalysis": "2",
            "/ReportSheet": "3"
        };
        let stateRoute = this.props.location.pathname;
        const {usrName} = this.props;

        const content = (
            <Button type="default" onClick={this.setLogoutType}>
                退出登录
            </Button>
        );

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
                        selectedKeys={[navList[stateRoute]]}
                    >
                        <Menu.Item key="1">
                            <Link replace to="/">
                                首页
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link replace to="/FlowAnalysis">
                                流量
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link replace to="/ReportSheet">
                                报表
                            </Link>
                        </Menu.Item>
                    </Menu>
                </div>
                <div className="hb-user-info">
                    <Popover
                        overlayClassName="hb-user-select"
                        content={content}
                        trigger="click"
                    >
                        <Button type="default" className="hb-user-selectbtn">
                            <Icon type="user" theme="outlined" />
                            {usrName}
                        </Button>
                    </Popover>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state /*, props*/) => {
    // console.log(state);
    return {
        usrName : state._loginType&&state._loginType.user?state._loginType.user.name:''
    };
};

const ConnectedHbheader = withRouter(connect(mapStateToProps)(Hbheader));

export default ConnectedHbheader;
