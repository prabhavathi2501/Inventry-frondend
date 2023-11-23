import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Annual Profit',
      },
    },
  };
  
  const labels = ['January', 'February', 'March','Aprile',"May","june","july","Agu","sep","oct","Nov","Dec"];
  
  export const data = {
    labels,
    datasets: [
      {
        label: ' Monthly Income  ',
        data: [-200,100,-50,185,-100,145,210,310,290,380,350,375,350,400],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Annual income',
        data:[350,-150,50,120,145,155,290,-140,100,250,280,299,310],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  
  

function LineChart() {
  return (
    <div style={{height:400, width:600}}>
        <Line options={options} data={data}/>
        <p className='text'>This is our Annual  And Monthly Profit</p>
    </div>
  )
}

export default LineChart