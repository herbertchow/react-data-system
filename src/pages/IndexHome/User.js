import React, { Component } from "react";
import "./User.less";
import LineChart from "@appSrc/components/LineChart";

class User extends Component {
    componentDidMount(){
        setInterval(()=>{
            console.log(111)
        },2000)
    }

    render() {
        let data = {
            datas:[{
                name: '邮件营销',
                type: 'line',
                areaStyle: {},
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '联盟广告',
                type: 'line',
                areaStyle: {},
                data: [220, 182, 191, 234, 290, 330, 310]
            }],
            categories:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        };

        return (
            <div className="index-user">
                用户
                <LineChart data={data}/>
                <br/>
                <LineChart data={data}/>
            </div>
        );
    }
}

export default User;
