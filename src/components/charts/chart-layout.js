"use client";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function ChartLayout({ chartData, chartOptions, type }) {
  const [updateChartData, setUpdateChartData] = useState([]);
  const [updateChartOptions, setUpdateChartOptions] = useState({});

  useEffect(() => {
    setUpdateChartOptions(chartOptions);
    setUpdateChartData(chartData);

    
  }, [chartOptions, chartData]);

  return (
    typeof window !== 'undefined' &&

      (<Chart options={updateChartOptions} series={updateChartData} type={type} height={'100%'} width={'100%'}/>)
    
  );
}
