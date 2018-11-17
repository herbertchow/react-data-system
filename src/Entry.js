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

    render() {
        let { loading } = this.props;
        // console.log(loading, "Entry mod,000");
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
        loading: getEntryLoading(state),
    };
};

const ConnectedEntry = withRouter(connect(mapStateToProps)(Entry));

export default ConnectedEntry;
