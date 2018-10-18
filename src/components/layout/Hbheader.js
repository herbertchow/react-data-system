import React, { Component } from "react";
import { Layout, Menu } from "antd";

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
            <Layout>
                <Header style={{ height: "40px", backgroundColor: '#fff' }}>
                    <Menu
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
                    </Menu>
                    <Layout style={{float:"right"}}>
                        <Sider>Sider</Sider>
                    </Layout>

                </Header>
            </Layout>
        );
    }
}

export default Hbheader;
