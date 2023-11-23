import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Stock And Sales Details',
      },
    },
  };

 
  
  
  const data = {
    labels:['January', 'February', 'March','Aprile',"May","june","july","Agu","sep","oct","Nov","Dec"],

    datasets: [
      {
        label: 'sales',
        data: [80,50,90,70,50,80,55,75,65,74,58,91],

 backgroundColor: 'rgba(24, 240, 72 ,0.65)',
      },
      {
        label: 'stock',
        data: [45,25,35,39,50,34,14,25,18,35,22,35],
        backgroundColor: 'rgba(245, 51, 12 , 0.5)',
      },
    ],
  };
  
 

function VerticalChart() {
  return (
    <div style={{height:400, width:600}}>
        <Bar options={options} data={data}/>
        <p className='text'>This is our Sales And  Stock Monthly Reports</p>
    </div>
    
  )
}

export default VerticalChart