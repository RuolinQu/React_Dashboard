import React,{useRef,useEffect} from 'react';
import * as echarts from 'echarts';

import { px } from '../shared/px';
import { defaultChartStyle } from '../shared/defaultChartStyle';


export const Chart1 = () => {

  const firstChartRef = useRef(null)

  useEffect(() => {
    var myFirstChart = echarts.init(firstChartRef.current);
    myFirstChart.setOption({
      ...defaultChartStyle,
      xAxis: {
        data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },
      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
        series: [{
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20,29,40,20,30]
        }]
    });
  }, [])


  return (
        <div className="bordered management">
          <h2>Management Statics</h2>
          <div ref={ firstChartRef} className="chart"></div>
        </div>
  );
};



  // useEffect(() => {
  //   var myChart = echarts.init(firstChartRef.current);
  //   myChart.setOption({
  //     textStyle: {
  //       color: '#79839E'
  //     },
  //     title: {show: false},
  //     legend: {show: false},
  //     xAxis: {
  //       data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
  //       axisTick: {show: false},
  //       axisLine: {
  //         lineStyle: {color: '#083B70'}
  //       },
  //       axisLabel: {
  //         fontSize: px(12),
  //         formatter(val) {
  //           if (val.length > 2) {
  //             const array = val.split('');
  //             array.splice(2, 0, '\n');
  //             return array.join('');
  //           } else {
  //             return val;
  //           }
  //         }
  //       },
  //     },
  //     grid: {
  //       x: px(40),
  //       y: px(40),
  //       x2: px(40),
  //       y2: px(40),
  //     },
  //     yAxis: {
  //       splitLine: {show: false},
  //       axisLine: {
  //         show: true,
  //         lineStyle: {color: '#083B70'}
  //       },
  //       axisLabel: {
  //         fontSize: px(12)
  //       }
  //     },
  //     series: [{
  //       type: 'bar',
  //       data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
  //     }]
  //   });
  // }, []);