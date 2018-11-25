/**
 * @description  折线图组建
 * @author Herbert Chow
 * @date 2018-11-25
 */

import React, { Component } from "react";
import "./LineChart.less";
import echarts from "echarts";

class Linechart extends Component {

    render() {
        
        return (
            <div className="hb-linechart">
                <div
                    id="chartDemo"
                    className="chart-demo"
                    style={{ display: this.state.showChart ? "block" : "none" }}
                />
            </div>
        );
    }
}

export default Linechart;
