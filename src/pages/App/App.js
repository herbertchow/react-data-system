import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../redux/action-creators";
import { withRouter } from "react-router-dom";
import MyRouter from "@appSrc/router";
import "./App.less";

// import ReactDOM from 'react-dom';
// import echarts from "echarts";

import { Layout, Breadcrumb } from "antd";
import Hbheader from "../../components/layout/Hbheader";
import Hbmenu from "../../components/layout/Hbmenu";

import routesConfig from "@appSrc/router/config";
import { getRoutesConfig } from "@appSrc/utils";

const { Content } = Layout;

// import "element-theme-default";

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props);
    // }

    onTimeButtonClick(delay) {
        // 这个按钮处理器在用户的点击事件后会分发一个 action。
        // 我们在这里会使用一个 Connect 提供的分发函数,
        // 也有很多其他的调用被绑定到分发器的 actionCreator 的方式,
        // 这种方式提供了第二个 Connect 的参数：
        // https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
        // 被传到 actionCreators.getTime 的 delay 值是为了在我们能得到当前时间之前模拟异步的工作,
        // 试着修改这个值来正确影响我们的 UI
        this.props.dispatch(actionCreators.getTime(delay));
    }

    render() {
        // 因为 Connect 我们能够通过 props 取到特定的数据

        return (
            <div className="App">
                <Hbheader />

                <Layout className="hb-main-layout">
                    <Hbmenu />
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Breadcrumb
                            style={{ margin: "16px 0", textAlign: "left" }}
                        >
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                background: "#fff",
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                position: "relative"
                            }}
                        >
                            <div>
                                <MyRouter
                                    startRouterRoot={getRoutesConfig(
                                        routesConfig,
                                        "App"
                                    )}
                                />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

const mapStateToProps = (state /*, props*/) => {
    return {
        frozen: state._time.frozen,
        time: state._time.time,
        // 像 (reduxState: state) 这样提供整个 state 是一种不好的实现,
        // 我们在这里这样写是为了让大家能看到我们页面字符串化的结果。更多信息请访问以下链接:
        // https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
        reduxState: state
    };
};

const ConnectedHome = withRouter(connect(mapStateToProps)(App));

export default ConnectedHome;
