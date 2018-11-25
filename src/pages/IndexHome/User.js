import React, { Component } from "react";
import "./User.less";
import LineChart from "@appSrc/components/LineChart";

class User extends Component {

    render() {

        return (
            <div className="index-user">
                用户
                <LineChart />
            </div>
        );
    }
}

export default User;
