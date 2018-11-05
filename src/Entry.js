import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import App from "./pages/App/App";
// import * as actionCreators from "./redux/action-creators";
// import { Button, Input } from "antd";

class Entry extends Component {
    render() {
        let isLogin = true;
        return isLogin?(<Login />):<App />;
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...state
    };
};

const ConnectedEntry = withRouter(connect(mapStateToProps)(Entry));

export default ConnectedEntry;
