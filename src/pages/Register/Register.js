import React, { Component } from "react";
import Promise from "bluebird";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Button, Input, message } from "antd";
import "./Register.less";

let TEST_DATA_PATH;
if(window.location.hostname === 'localhost'){
    TEST_DATA_PATH = "/test/mock";
}else{
    TEST_DATA_PATH = "/pro/react-data-system/test/mock";
}

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
        this.goLogin = this.goLogin.bind(this);
    }

    async sendRegister({ userName, password }) {
        //发送请求前
        const { dispatch } = this.props;
        dispatch({ type: "SET_ENTRYLOADING_SHOW" });

        //发送请求中
        //才用async方式，测试模拟接口延迟返回
        try {
            var getres = await new Promise((resolve, reject) => {
                axios
                    .get(TEST_DATA_PATH + "/registerData.json", {
                        params: {
                            userName: userName,
                            password: password
                        }
                    })
                    .then(function(response) {
                        setTimeout(() => {
                            resolve(response.data);
                        }, 500);
                    })
                    .catch(function(error) {
                        reject(error);
                    });
            });

            if (getres.code == 200) {
                dispatch({ type: "SET_ENTRYLOADING_HIDE" });
                message.success(getres.msg);
                this.goLogin();
            } else {
                dispatch({ type: "SET_ENTRYLOADING_HIDE" });
                message.error("接口返回正常，状态为错误");
            }
        } catch (e) {
            dispatch({ type: "SET_ENTRYLOADING_HIDE" });
            message.error("接口返回错误（网络原因等）：" + e);
        }
    }

    goLogin() {
        this.props.history.push("/Login");
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
            <div className="register-wrap">
                注册页
                <br />
                输入任意内容并注册
                <br /> 账号：{" "}
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
                    onClick={() =>
                        this.sendRegister({
                            userName: userName,
                            password: password
                        })
                    }
                >
                    确定
                </Button>
                <Button
                    type="default"
                    className="login-reg"
                    onClick={this.goLogin}
                >
                    取消
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

const ConnectedRegister = withRouter(connect(mapStateToProps)(Register));

export default ConnectedRegister;
