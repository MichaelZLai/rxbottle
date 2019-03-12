import React, { Component } from 'react'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

class PainLine extends Component {
  render() {
    const {painArr} = this.props

    const myDataSource = {
      "chart": {
          "caption": "Pain",
          "yAxisName": "Sentiment Level",
          "xAxisName": "Date Answered (MMM/DD/YYYY)",
          "theme": "fusion",
          "rotateLabels": 1,
          "showValues": 1,
          "yAxisMaxValue": "1",
          "yAxisMinValue": "-.1",
          "captionFontColor": "EE6730",
          "labelFontColor": "167FFB",
          "valueFontColor": "74CAC4",
          "baseFontColor": "167FFB",
          "yAxisNameFontColor": "000",
          "xAxisNameFontColor": "000"
        },
        "data": painArr
    };

    const chartConfigs = {
      type: 'line',
      width: "100%",
      height: "250",
      dataFormat: 'json',
      dataSource: myDataSource,
    }


    return (
      <div className="line-container">
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default PainLine;
