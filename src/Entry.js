import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Spin } from "antd";
import MyRouter from "@appSrc/router";
// import * as actionCreators from "./redux/action-creators";
// import { Button, Input } from "antd";

class Entry extends Component {
    // shouldComponentUpdate(nextProps, nextState) {
    // }

    componentDidMount() {
        // console.log('componentDidMount')
        let { isLogin, history, location } = this.props;

        if (!isLogin) {
            location.pathname === "/Register"
                ? history.replace(location.pathname)
                : history.replace("/Login");
        } else {
            history.replace(
                location.pathname === "/Login" ? "/" : location.pathname
            );
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('componentWillReceiveProps')
        let { isLogin, location } = nextProps;
        let { history } = this.props;
        let oldLogin = this.props.isLogin;
        if (
            oldLogin !== isLogin ||
            (oldLogin === isLogin &&
                nextProps.location.pathname !== this.props.location.pathname)
        ) {
            if (!isLogin) {
                location.pathname === "/Register"
                    ? history.replace(location.pathname)
                    : history.replace("/Login");
            } else {
                history.replace(
                    nextProps.location.pathname === "/Login"
                        ? "/"
                        : nextProps.location.pathname
                );
            }
        }
    }

    render() {
        let { loading } = this.props;
        // console.log(isLogin, loading, "Entry mod,000");
        return (
            <Spin spinning={!!loading}>
                <MyRouter />
            </Spin>
        );
    }
}

function getEntryLoading(state) {
    if (state._loginType || state._entryLoading) {
        let tag = false;
        if (state._loginType.frozen || state._entryLoading.frozen) {
            tag = true;
        }
        return tag;
    }
    return false;
}

const mapStateToProps = (state, props) => {
    // console.log(state, "Entry mod",state._loginType.frozen);
    return {
        ...state,
        isLogin: state._loginType ? state._loginType.isLogin : false,
        loading: getEntryLoading(state) //state._loginType ? state._loginType.frozen : false
    };
};

const ConnectedEntry = withRouter(connect(mapStateToProps)(Entry));

export default ConnectedEntry;
