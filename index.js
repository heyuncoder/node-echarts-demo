var node_echarts = require('node-echarts');


var option = {
  title: {
    text: 97,
    x: 'center',
    y: 'center',
    textStyle: {
      color: '#fff',
      fontWeight: 'bolder',
      fontSize: 24,
    }
  },
  toolbox: {
    show: false,
    feature: {
      dataView: {
        readOnly: false
      },
      saveAsImage: {}
    }
  },
  radar: {
    name: {
      textStyle: {
        color: '#333',
        padding: [0, 5]
      }
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#d5a478',
        opacity: 1
      }
    },
    splitArea: {
      show: true,
      areaStyle: {
        color: '#DADADA',
        opacity: 1
      }
    },
    splitLine: {
      show: false
    },
    indicator: [{
        name: '房屋增值',
        max: 100
      },
      {
        name: '抗跌能力',
        max: 100
      },
      {
        name: '短租收益',
        max: 100
      },
      {
        name: '长租收益',
        max: 100
      },
      {
        name: '持有成本',
        max: 100
      }
    ]
  },
  series: [{
    type: 'radar',
    symbol: "none",
    lineStyle: {
      opacity: 1
    },
    areaStyle: {
      // color: '#000000',//'#d5a478',
      opacity: 1
    },
    data: [{
      value: [
        90,
        90,
        90,
        90,
        80,
        90
      ]
    }]
  }]
};


node_echarts({
    width: 500, // Image width, type is number.
    height: 500, // Image height, type is number.
    option: option, // Echarts configuration, type is Object.
    // If the path  is not set, return the Buffer of image.
    path:  'test.jpg', // Path is filepath of the image which will be created.
})
