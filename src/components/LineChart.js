/**
 * @description  折线图组建
 * @author Herbert Chow
 * @date 2018-11-25
 */

import React, { Component } from "react";
import echarts from "echarts";
import chartOption from "./data_config/LineChartConfig";
import {initChartsThemeMacarons} from "./data_config/LineChartMacarons";
import {getRandom} from "@appSrc/utils";

import "./LineChart.less";

class Linechart extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:getRandom(),
            mychart:null,
            showChart: false,
        }
    }

    componentDidMount() {
        initChartsThemeMacarons(echarts);
        this.setState({ showChart: true });
        const getEl = document.getElementById(this.state.id);
        this.setState({ mychart: echarts.init(getEl,'macarons') });
    }

    render() {
        let { data } = this.props;
        
        let options = chartOption;
        options.series = data.datas;
        options.xAxis[0].data = data.categories;
        options.legend.data = data.datas.map(item => item.name);

        setTimeout(() => {
            if (this.state.mychart) {
                this.state.mychart.setOption(options);
                this.state.mychart.resize();
            }
        }, 0);

        return (
            <div className="hb-linechart-wrap">
                <div
                    id={this.state.id}
                    className="hb-linechart"
                    style={{ display: this.state.showChart ? "block" : "none" }}
                />
            </div>
        );
    }
}

export default Linechart;
