import React, { Component } from 'react';
import './User.less';
import LineChart from '@appSrc/components/LineChart';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        datas: [
          {
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
          }
        ],
        categories: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
    };
  }

  componentDidMount() {
    this.si = setInterval(() => {
      this.setState({
        data: {
          datas: [
            {
              name: '邮件营销',
              type: 'line',
              areaStyle: {},
              data: [Math.random()*220, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'line',
              areaStyle: {},
              data: [Math.random()*120, 182, 191, 234, 290, 330, 310]
            }
          ],
          categories: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
      });
    },  1000);
  }

  componentWillUnmount(){
    clearInterval(this.si);
  }

  render() {
    let data = this.state.data;

    return (
      <div className="index-user">
        用户
        <LineChart data={data} />
        <br />
        <LineChart data={data} />
      </div>
    );
  }
}

export default User;
