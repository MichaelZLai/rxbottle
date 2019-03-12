import React, { Component } from 'react'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const myDataSource = {
  "chart": {
    "caption": "Fingerprint Access",
    "plottooltext": "<b>$percentValue</b> of fingerprint ran $label",
    "showlegend": "1",
    "showpercentvalues": "1",
    "legendposition": "bottom",
    "usedataplotcolorforlabels": "1",
    "theme": "fusion"
  },
  "data": [
      {
        "label": "Wrong",
        "value": "32647479"
      },
      {
        "label": "Correct",
        "value": "22100932"
      }
  ]
};

const chartConfigs = {
  type: 'pie2d',
  renderAt: 'chart-container',
  width: "100%",
  height: "100%",
  dataFormat: 'json',
  dataSource: myDataSource,
}

class Pie extends Component {

  render() {
    return (
      <div className="pie-container">
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default Pie;
