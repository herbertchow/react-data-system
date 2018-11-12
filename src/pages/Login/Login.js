import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actionCreators from "../../redux/action-creators";
import { Button, Input } from "antd";
import "./Login.less";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
        this.goRegister = this.goRegister.bind(this);
    }

    sendLogin({ userName, password }) {
        this.props.dispatch(
            actionCreators.setLoginType({ userName, password })
        );
    }

    goRegister(){
        this.props.history.push('/Register')
    }

    onChangeUserName = e => {
        this.setState({ userName: e.target.value });
    };

    onChangeUserPwd = e => {
        this.setState({ password: e.target.value });
    };

    render() {
        let { userName, password } = this.state;
        return (
            <div className="login-wrap">
                登录页<br/>输入任意内容并登录<br/> 账号：{" "}
                <Input
                    placeholder="输入账号"
                    value={userName}
                    onChange={this.onChangeUserName}
                />
                <br />
                密码：
                <Input
                    placeholder="输入密码"
                    value={password}
                    type="password"
                    onChange={this.onChangeUserPwd}
                />
                <Button
                    type="primary"
                    className="login-confirm"
                    onClick={() => this.sendLogin({
                        userName: userName,
                        password: password
                    })}
                >
                    确定
                </Button>
                <Button
                    type="default"
                    className="login-reg"
                    onClick={this.goRegister}
                >
                    注册
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...state
    };
};

const ConnectedLogin = withRouter(connect(mapStateToProps)(Login));

export default ConnectedLogin;
