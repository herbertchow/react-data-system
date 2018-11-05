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
    }

    sendLogin({ userName, password }) {
        this.props.dispatch(
            actionCreators.setLoginType({ userName, password })
        );
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
            <div>
                这里是登陆页 账号：{" "}
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
                    onChange={this.onChangeUserPwd}
                />
                <Button
                    type="primary"
                    className="hb-user-selectbtn"
                    onClick={() => this.sendLogin({
                        userName: userName,
                        password: password
                    })}
                >
                    确定
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
