import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import { Spin } from "antd";
import App from "./pages/App/App";
// import * as actionCreators from "./redux/action-creators";
// import { Button, Input } from "antd";

class Entry extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log(nextProps, this.props);
    //     let { isLogin, history } = this.props;
        
    //     if (nextProps.location.pathname !== this.props.location.pathname) {
    //         if (!isLogin) {
    //             history.replace('/Login');
    //         } else {
    //             history.replace('/');
    //         }
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    componentDidMount(){
        console.log('componentDidMount')
        let { isLogin } = this.props;
        if(!isLogin){
            this.props.history.replace('/Login')
        }else{
            this.props.history.replace('/')
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
        let { isLogin } = nextProps;
        let oldLogin = this.props.isLogin;
        if(oldLogin !== isLogin){
            if(!isLogin){
                this.props.history.replace('/Login')
            }else{
                this.props.history.replace('/')
            }
        }
    }

    render() {
        let { loading } = this.props;
        // console.log(isLogin, loading, "Entry mod,000");

        return (
            <Spin spinning={!!loading}>
                <Switch>
                    <Route path="/Login" component={Login} />
                    <Route component={App} />
                </Switch>
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
