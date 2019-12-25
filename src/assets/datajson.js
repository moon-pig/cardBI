export const ecahrtsOption = [{
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '2%',
    right: '4%',
    bottom: '0',
    top:'20%',
    containLabel: true
  },
  legend: {
    data: ['民阵公布游行人数', '警方公布游行人数', '警方人数'],
    right: 10,
    top:0,
    textStyle: {
      color: "#fff",
      fontSize: '16',
    },
    itemWidth: 12,
    itemHeight: 10,
    // itemGap: 35
  },
  xAxis: {
    type: 'category',
    data: ['2019/3/31','2019/4/28','2019/6/9','2019/6/16','2019/7/1','2019/7/21','2019/8/18','2019/9/28'],
    axisLine: {
      lineStyle: {
        color: 'white'

      }
    },
    axisLabel: {
      // interval: 0,
      // rotate: 40,
      textStyle: {
        fontFamily: 'Microsoft YaHei',
      }
    },
  },

  yAxis: {
    type: 'value',
    max:'2000000',
    axisLine: {
      show: false,
      lineStyle: {
        color: 'white'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255,255,255,0.3)'
      }
    },
    axisLabel: {}
  },
  series: [{
    name: '民阵公布游行人数',
    type: 'bar',
    barWidth: '15%',
    barMinHeight:10,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#fccb05'
        }, {
          offset: 1,
          color: '#f5804d'
        }]),
      },
    },
    data: [12000, 130000, 1030000, 2000000, 550000, 430000, 1700000, 200000]
  },
    {
      name: '警方公布游行人数',
      type: 'bar',
      barWidth: '15%',
      barMinHeight:8,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#8bd46e'
          }, {
            offset: 1,
            color: '#09bcb7'
          }]),
        }

      },
      data: [5200, 22000, 240000, 338000, 190000, 138000,128000, 8440]
    },
    {
      name: '警方人数',
      type: 'bar',
      barWidth: '15%',
      barMinHeight:6,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#248ff7'
          }, {
            offset: 1,
            color: '#6851f1'
          }]),
        }
      },
      data: [500, 2000, 2000, 2000, 2000, 3000, 2500, 1000]
    }]
}]
