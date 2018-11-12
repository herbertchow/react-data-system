import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import * as actionCreators from "../../redux/action-creators";
import "./IndexHome.less";

class IndexHome extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.sendAlert = this.sendAlert.bind(this);
    }

    sendAlert({ error, fail }) {
        this.props.sendTheAlert({ error, fail });
    }

    onTimeButtonClick(delay) {
        // 这个按钮处理器在用户的点击事件后会分发一个 action。
        // 我们在这里会使用一个 Connect 提供的分发函数,
        // 也有很多其他的调用被绑定到分发器的 actionCreator 的方式,
        // 这种方式提供了第二个 Connect 的参数：
        // https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
        // 被传到 actionCreators.getTime 的 delay 值是为了在我们能得到当前时间之前模拟异步的工作,
        // 试着修改这个值来正确影响我们的 UI
        // this.props.dispatch(actionCreators.getTime(delay));
        this.props.getTime(delay);
    }

    render() {
        // 因为 Connect 我们能够通过 props 取到特定的数据
        var { frozen, time, reduxState, errText } = this.props;
        var attrs = {};
        const DELAY = 500; // 毫秒

        if (frozen) {
            attrs = {
                disabled: true
            };
        }

        return (
            <div className="index-home">
                <div>
                    <h1>两种方式获取异步数据</h1>
                    <span>
                        <b>What time is it?</b>{" "}
                        {time ? `It is currently ${time}` : "No idea yet..."}
                    </span>
                    <br /> <br />
                    <i>
                        When clicking the button below, the time will be
                        provided after a {DELAY}
                        ms delay.
                        <br />
                        Try to change this value (in{" "}
                        <b>src/home.jsx - line 95</b>) to verify that the delay
                        given correctly impacts our UI.
                    </i>
                    <br />
                    {/* 这里注册按钮的 "onClick" 句柄: */}
                    <Button
                        {...attrs}
                        onClick={() => this.onTimeButtonClick(DELAY)}
                    >
                        Get time!
                    </Button>
                    <Button {...attrs} onClick={this.sendAlert}>
                        测试mapDispatchToProps并返回成功
                    </Button>
                    <Button
                        {...attrs}
                        onClick={() => this.sendAlert({ error: 1 })}
                    >
                        测试mapDispatchToProps并返回成功且状态错误
                    </Button>
                    <br />
                    <Button
                        {...attrs}
                        onClick={() => this.sendAlert({ fail: 1 })}
                    >
                        测试mapDispatchToProps并返回错误
                    </Button>
                    <h2 style={{ display: !!errText ? "block" : "none" }}>
                        当前接口状态：
                        {errText}
                    </h2>
                    <pre>
                        redux state = {JSON.stringify(reduxState, null, 2)}
                    </pre>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state /*, props*/) => {
    return {
        frozen: state._time.frozen,
        time: state._time.time,
        errText: state._time.errText,
        // 像 (reduxState: state) 这样提供整个 state 是一种不好的实现,
        // 我们在这里这样写是为了让大家能看到我们页面字符串化的结果。更多信息请访问以下链接:
        // https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
        reduxState: state
    };
};

//A.把所有数据都放到store里面，会有性能问题
//B.把数据放在组件用请求，不利于解耦
//结论：要权衡利弊考虑好，一般建议全局的，放到store去，局部的 放局部
function mapDispatchToProps(dispatch) {
    // console.log(dispatch.toString(),111); //dispatch指向promise-middleware
    return {
        //第一种异步请求方式，逻辑写在组件内，耦合度高，即便是在组建中请求，数据也可以分成两种：1、存在全局store中；2、存在组件本身state中
        sendTheAlert: async ({ error, fail }) => {
            //发送请求前
            dispatch({ type: "GET_TIME_REQUEST" });

            //发送请求中
            //才用async方式，测试模拟接口延迟返回
            try {
                var getres = await new Promise((res, rej) => {
                    setTimeout(() => {
                        // console.log("模拟延迟返回");
                        if (fail) {
                            rej("网络断开！");
                        } else if (error) {
                            res({ result: { success: false } });
                        } else {
                            res({ result: { time: 100, success: true } });
                        }
                    }, 700);
                });

                if (getres.result.success) {
                    dispatch({
                        // types:["GET_TIME_REQUEST","GET_TIME_SUCCESS","GET_TIME_FAILURE"],
                        // promise:() => {
                        //     return new Promise((resolve, reject) =>{
                        //         console.log('success');
                        //         resolve({test:1});
                        //     });
                        // },
                        type: "GET_TIME_SUCCESS",
                        result: { time: getres.result.time, errText: "" }
                    });
                } else {
                    dispatch({
                        type: "GET_TIME_FAILURE",
                        result: { errText: "接口返回正常，状态为错误" }
                    });
                }
            } catch (e) {
                dispatch({
                    type: "GET_TIME_FAILURE",
                    result: { errText: "接口返回错误（网络原因等）：" + e }
                });
            }
        },
        //第二种异步请求方式，逻辑写在action中
        getTime: delay => {
            dispatch(actionCreators.getTime(delay));
        }
    };
}

const ConnectedIndexHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexHome);

export default ConnectedIndexHome;
