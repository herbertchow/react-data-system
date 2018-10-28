import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./redux/action-creators";
import { Route, withRouter } from "react-router-dom";
import "./App.css";

// import ReactDOM from 'react-dom';
// import echarts from "echarts";

import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Hbheader from "./components/layout/Hbheader";
import IndexHome from "./pages/IndexHome/IndexHome";
import FlowAnalysis from "./pages/FlowAnalysis/FlowAnalysis";
import ReportSheet from './pages/ReportSheet/ReportSheet'

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

// import "element-theme-default";

class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

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
                    <Sider width={200} style={{ background: "#fff" }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{ height: "100%", borderRight: 0 }}
                        >
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="user" />
                                        subnav 1
                                    </span>
                                }
                            >
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="laptop" />
                                        subnav 2
                                    </span>
                                }
                            >
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={
                                    <span>
                                        <Icon type="notification" />
                                        subnav 3
                                    </span>
                                }
                            >
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Breadcrumb style={{ margin: "16px 0",textAlign:"left" }}>
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
                                position:"relative"
                            }}
                        >
                            <div>
                                <Route exact path="/" component={IndexHome} />
                                <Route
                                    path="/FlowAnalysis"
                                    component={FlowAnalysis}
                                />
                                <Route
                                    path="/ReportSheet"
                                    component={ReportSheet}
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
