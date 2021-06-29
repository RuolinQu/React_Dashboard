import React,{useRef,useEffect} from 'react';
import * as echarts from 'echarts';

import { px } from '../shared/px';
import { defaultChartStyle } from '../shared/defaultChartStyle';

export const Chart2 = () => {

  const firstChartRef = useRef(null)

  useEffect(() => {
    var myFirstChart = echarts.init(firstChartRef.current);
    myFirstChart.setOption({
        ...defaultChartStyle,
        grid: {
            x:px(100),
            y:px(40),
            x2:px(20),
            y2:px(40),
          },
        legend: {
            data: ['2011年', '2012年']
        },
        xAxis: {
            axisLabel:{
                fonsize:px(8)
            },
            type: 'value',
            boundaryGap:[0,0.01]
        },
        yAxis: {
            axisLabel:{
                fonsize:px(8)
            },
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)'],
        },
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: [18203, 23489, 29034, 104970, 131744, 630230]
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
        ]
    });
  }, [])


  return (
        <div className="bordered management">
          <h2>Management Statics</h2>
          <div ref={ firstChartRef} className="chart"></div>
        </div>
  );
};