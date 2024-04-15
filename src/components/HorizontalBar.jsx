import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    indexAxis: "y",
    aspectRatio: 7,
    barPercentage: 1,
    responsive: true,
    borderSkipped: false,
    scales: {
      x: {
        stacked: true,
        display: false,
        grid: {
            display: false,
            drawBorder: false,
            drawTicks: false,
          },
          ticks: {
            display: false,
          },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
        legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.x !== null) {
                  label += context.parsed.x + "%";
                }
                return label;
              },
            },
          },
          
        },
  };
  
  const labels = [""];
  const barData=[
    {
      title: "ThoughtLeadership",
      percentage: 40,
    },
    {
        title: "KeywordDriven",
        percentage: 20,
      },{
        title: "Instructional",
        percentage: 30,
      },
    {
      title: "CompanyUpdate",
      percentage: 20,
    },
    {
      title: "Other",
      percentage: 10,
    },
  ];
  export function HorizontalBar() {
    const totalDatasets = barData?.map((item) => {
      let bgColor = "#3B3BB6";
      if (item.title == "ThoughtLeadership") bgColor = "#B5EEFF";
      else if (item.title == "KeywordDriven") bgColor = "#CCE896";
      else if (item.title == "Instructional") bgColor = "#FFD188";
      else if (item.title == "CompanyUpdate") bgColor = "#F7ACCE";
      else if (item.title == "Other") bgColor = "#A595FF";
      else bgColor = "#3B3BB6";
  
      return {
        label: item.title,
        data: [item.percentage],
        backgroundColor: bgColor,
      };
    });
  
    const data = {
      labels,
      datasets: totalDatasets,
    };
  
    return <Bar options={options} data={data} height={20} />;
  }