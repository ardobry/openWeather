import React from "react";
import { Line } from "react-chartjs-2";

function Chart(props) {
  const options = {
    responsive: true,
    responsiveAnimationDuration: 0.3,
    maintainAspectRatio: false,
    animation: {
      duration: 1700
    },
    legend: {
      display: false,
      position: props.legendPosition
    },
    tooltips: {
      mode: "x-axis",
      backgroundColor: "#C0C0C0",
      titleFontSize: 13,
      bodyFontSize: 14
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          },
          ticks: {
            maxTicksLimit: 4,
            backdropColor: "rgba(255,0,0,0.5)"
          }
        }
      ]
    },
    showXLabels: 3
  };

  return (
    <Line width={450} height={350} data={props.ronaldo} options={options} />
  );
}

export default Chart;
