import React, { Component } from "react";
import logo from "../../logo.svg";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import * as actionCreators from "../../redux/action-creators";
import { Menu, Popover, Button, Icon } from "antd";
import GLOBALTEXT from "@appSrc/assets/text/global-text";

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
        
        let stateRoute = this.props.location.pathname;
        const { usrName,nameSpace } = this.props;

        const content = (
            <Button type="default" onClick={this.setLogoutType}>
                退出登录
            </Button>
        );
        
        const navList = {
            "INDEXHOME": "1",
            "FLOWANALYSIS": "2",
            "REPORTSHEET": "3"
        };

        return (
            <div className="hb-header">
                <div className="hb-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-logo-text">{GLOBALTEXT.GLOBAL.APPNAME}</span>
                </div>
                <div className="top-menu-wrap">
                    <Menu
                        className="top-menu"
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[navList[nameSpace]]}
                    >
                        <Menu.Item key="1">
                            <Link replace={stateRoute==="/"} to="/">
                                {GLOBALTEXT.MENU.INDEXHOME}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link replace={stateRoute==="/FlowAnalysis"} to="/FlowAnalysis">
                                {GLOBALTEXT.MENU.FLOW}
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link replace={stateRoute==="/ReportSheet"} to="/ReportSheet">
                                {GLOBALTEXT.MENU.REPORTSHEET}
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
        usrName:
            state._loginType && state._loginType.user
                ? state._loginType.user.name
                : ""
    };
};

const ConnectedHbheader = withRouter(connect(mapStateToProps)(Hbheader));

export default ConnectedHbheader;
