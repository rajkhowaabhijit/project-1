import React from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { Card, CardHeader, makeStyles } from '@material-ui/core'

am4core.useTheme(am4themes_animated)

const useStyle = makeStyles(theme => ({
    card: {
        width: "100%",
    }
}))

const BarGraph = props => {
    const classes = useStyle()

// Create chart instance
let chart = am4core.create("chartdiv",am4charts.XYChart);

// Add data
chart.data = [{
    "name": "Inbox",
    "points": 63.9,
    "color": "#5b009a",
}, {
    "name": "Tabs",
    "points": 2.8,
    "color": "#27AE60",
}, {
    "name": "Spam",
    "points": 28.3,
    "color": "#EB5757",
}, {
    "name": "Missing",
    "points": 23.5,
    "color": "#F2C94C",
}];
chart.logo.disabled = true;
// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.minGridDistance = 30;
categoryAxis.renderer.inside = true;
categoryAxis.renderer.labels.template.disabled = true;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.min = 0;

// Remove padding
chart.paddingBottom = 0;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "points";
series.dataFields.categoryX = "name";
series.columns.template.propertyFields.fill = "color";
series.columns.template.propertyFields.stroke = "color";
series.columns.template.column.cornerRadiusTopLeft = 10;
series.columns.template.column.cornerRadiusTopRight = 10;
series.columns.template.tooltipText = "[bold,{color}]{categoryX} - [bold,{color}]{valueY}[bold,{color}]%";
series.columns.template.showTooltipOn = "always";
series.columns.template.tooltipY = -5;
series.tooltip.pointerOrientation = "down";
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#f2f2f2");
series.tooltip.background.stroke = am4core.color("#f2f2f2");
series.tooltip.background.strokeWidth = 1;
series.tooltip.background.filters.clear();

return(
    <Card elevation={0} className={classes.card}>
        <CardHeader title="Email Placement Results"></CardHeader>
        <div id="chartdiv"></div>
    </Card>
)

}

export default BarGraph
