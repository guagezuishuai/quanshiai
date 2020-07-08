<!--
 * @Author: your name
 * @Date: 2020-05-18 16:11:30
 * @LastEditTime: 2020-07-01 21:23:25
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: /world-love/src/components/lineChart.vue
--> 
<template>
  <div>
    <div id="chart3" style="height: 400px;"></div>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    xInfo: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  mounted() {
    let option = {
      backgroundColor: '#F4F9FC',
      visualMap: {
        show: true,
        dimension: 1,
        top: 0,
        right: 0,
        pieces: [], //pieces的值由动态数据决定
        outOfRange: {
          color: "#000"
        }
      },
      tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#2BB3E5'
            }
        },
        axisPointer: {
            label: {
                formatter: function (params) {
                    return params.value ;
                }
            }
        },
        data: []
      },
      yAxis: {
        type: "value",
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#2BB3E5'
            }
        },
      },
      series: [
        {
            data: [],
            type: "line",
            name: '心率折线图',
            xAxisIndex: 0,
            smooth: true,
        }
      ]
    };
    option.xAxis.data = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12 (月)"
    ];
    option.visualMap.pieces[0] = {lte: 10, color: '#2BB3E5'};
    // option.visualMap.pieces[1] = {min: 20, max: 30},
    option.visualMap.pieces[1] = {gte: 30, color: '#F47153'};

    option.series[0].data = [21, 25, 27, 12, 22, 21, 25, 27, 12, 22, 42, 32];
    var chart3 = window.echarts.init(document.getElementById("chart3"));
    chart3.setOption(option);
  }
};
</script>