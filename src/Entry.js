import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Spin } from "antd";
import App from "./pages/App/App";
// import * as actionCreators from "./redux/action-creators";
// import { Button, Input } from "antd";

class Entry extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps, this.props);
    //     let { isLogin, history } = this.props;
    //     if (!isLogin) {
    //         history.replace('/Login');
    //     } else {
    //         history.replace('/');
    //     }
    //     if (nextProps.location.pathname !== this.props.location.pathname) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    render() {
        let { isLogin, loading } = this.props;
        // console.log(isLogin, loading, "Entry mod,000");

        return (
            <Spin spinning={!!loading}>
                {isLogin ? <App /> : <Login />}
            </Spin>
        );
    }
}

const mapStateToProps = (state, props) => {
    // console.log(state, "Entry mod",state._loginType.frozen);
    return {
        ...state,
        isLogin: state._loginType ? state._loginType.isLogin : false,
        loading: state._loginType ? state._loginType.frozen : false
    };
};

const ConnectedEntry = withRouter(connect(mapStateToProps)(Entry));

export default ConnectedEntry;
