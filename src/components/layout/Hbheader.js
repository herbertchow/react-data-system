import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

class Hbheader extends Component {
    render() {
        const options = [
            { label: "Apple", value: "Apple" },
            { label: "Pear", value: "Pear" },
            { label: "Orange", value: "Orange" }
        ];
        return (
            <Layout>
                <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "64px" }}
                    >
                        {options.map(item => {
                            return (
                                <Menu.Item key={item.value}>{item.label}:{item.value}</Menu.Item>
                            );
                        })}
                    </Menu>
                </Header>
            </Layout>
        );
    }
}

export default Hbheader;
