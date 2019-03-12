import React, { Component } from 'react'
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);

const chartConfigs = {
    type: 'angulargauge', // The gauge type
    width: '450', // Width of the gauge
    height: '250', // Height of the gauge
    dataFormat: 'json', // Data type
    dataSource: {
    // Chart Configuration
      "chart": {
          "caption": "Overall Sentiment Behavior",
          "lowerLimit": "0",
          "upperLimit": "100",
          "showValue": "1",
          "numberSuffix": "%",
          "theme": "fusion",
          "showToolTip": "0"
      },
      // Chart Data
      "colorRange": {
          "color": [{
              "minValue": "0",
              "maxValue": "40",
              "code": "#F2726F"
          }, {
              "minValue": "40",
              "maxValue": "60",
              "code": "#FFC533"
          }, {
              "minValue": "60",
              "maxValue": "100",
              "code": "#62B58F"
          }]
      },
      "dials": {
          "dial": [{
              "value": "81"
          }]
      }
  }
};

class Gauge extends Component {

  render() {
    return (
      <div className="gauge-container">
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default Gauge;
