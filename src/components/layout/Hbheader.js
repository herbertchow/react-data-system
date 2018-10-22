import React, { Component } from "react";
import { Layout, Menu } from "antd";

import './Hbheader.less'

const { Header, Sider } = Layout;
// {/* <style>.haha{color:red;}</style> */}

class Hbheader extends Component {
    render() {
        const options = [
            { label: "Apple", value: "Apple" },
            { label: "Pear", value: "Pear" },
            { label: "Orange", value: "Orange" }
        ];
        return (
            <Layout className="hb-header">
                <div class="logo"></div>
                <div style={{"width":"500px;"}}>
                    {/* <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "40px", height: "40px" }}
                    >
                        {options.map(item => {
                            return (
                                <Menu.Item key={item.value}>{item.label}:{item.value}</Menu.Item>
                            );
                        })}
                    </Menu> */}
                </div>
                <div>
                    <Layout>
                        <Sider>Sider</Sider>
                    </Layout>
                </div>
            </Layout>
        );
    }
}

export default Hbheader;
