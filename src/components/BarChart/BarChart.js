import React from "react";
import { Chart } from "react-google-charts";

function BarChart(props) {
  return (
    <div>
      <Chart
        height={"500px"}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={props.data}
        options={{
          colors: props.color,
          chart: {
            title: props.title,
            subtitle: "Chewy.com, Test Run ID: A233-CA92-3293-B9AA",
            titleTextStyle: {
              color: "red",
            },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default BarChart;
