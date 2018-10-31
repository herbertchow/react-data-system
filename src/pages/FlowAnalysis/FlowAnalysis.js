import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "antd";
import * as actionCreators from "../../redux/action-creators";
import "./FlowAnalysis.less";

class FlowAnalysis extends Component {
    constructor(props) {
        super(props);
        this.onTimeButtonClick = this.onTimeButtonClick.bind(this);
    }

    onTimeButtonClick() {
        // 这个按钮处理器在用户的点击事件后会分发一个 action。
        // 我们在这里会使用一个 Connect 提供的分发函数,
        // 也有很多其他的调用被绑定到分发器的 actionCreator 的方式,
        // 这种方式提供了第二个 Connect 的参数：
        // https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
        // 被传到 actionCreators.getTime 的 delay 值是为了在我们能得到当前时间之前模拟异步的工作,
        // 试着修改这个值来正确影响我们的 UI
        this.props.dispatch(actionCreators.fetchTableData());
    }

    render() {
        // 因为 Connect 我们能够通过 props 取到特定的数据
        let { frozen, resData } = this.props;
        let attrs = {};
        let dataSource =
            resData.data.map(item => {
                const { id, sex, admin, dpm, add_time } = item;
                return { id, sex, admin, dpm, add_time };
            }) || [];
        const total = resData.total || 0;
        const columns = [
            {
                dataIndex: "id",
                key: "id",
                title: "编号"
            },
            {
                dataIndex: "admin",
                key: "admin",
                title: "姓名"
            },
            {
                dataIndex: "sex",
                key: "sex",
                title: "性别"
            },
            {
                dataIndex: "dpm",
                key: "dpm",
                title: "部门"
            },
            {
                dataIndex: "add_time",
                key: "add_time",
                title: "入职时间"
            }
        ];

        console.log("重新渲染了组件：props", this.props, 9000);
        //

        if (frozen) {
            attrs = {
                disabled: true
            };
        }

        return (
            <div className="flow-analysis">
                流量分析
                {/* {'haha'}
                {
                    resData.data.map(item =>
                        <div key={item.admin}>{item.admin}:{item.sex}</div>)

                } */}
                <Table
                    dataSource={dataSource}
                    rowKey="id"
                    columns={columns}
                    pagination={{
                        pageSize: 5,
                        total: total,
                        showTotal: () => `Total ${total} items`
                    }}
                />
                <br />
                <Button {...attrs} onClick={this.onTimeButtonClick}>
                    Get time!
                </Button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        frozen: state._fetchTableData.frozen,
        resData: state._fetchTableData.resData,
        // 像 (reduxState: state) 这样提供整个 state 是一种不好的实现,
        // 我们在这里这样写是为了让大家能看到我们页面字符串化的结果。更多信息请访问以下链接:
        // https://github.com/reactjs/react-redux/blob/master/docs/api.md#inject-dispatch-and-every-field-in-the-global-state
        reduxState: state
    };
};

const ConnectedHome = connect(mapStateToProps)(FlowAnalysis);

export default ConnectedHome;
