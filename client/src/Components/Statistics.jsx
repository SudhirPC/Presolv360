import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useDispatch, useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,

  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

export function FirstHChart(props) {
  let userDetails;
  // console.log("charts,",props)
   userDetails= useSelector((state) => state.dailytasks.user);
  console.log("charts,",userDetails)

let taskarray=userDetails?.task
console.log('useDetails',userDetails?.task);
let pending=0;
let complete=0;
 taskarray?.map((e)=>{

  if(e.statustask==false){
    pending++;
  }else{
    complete++;
  }
 })
console.log('useDetails',pending,complete);

 const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,

  plugins: {
    showDatapoints: true,
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Avg interest by month (days)",
      padding: {
        bottom: 30
      },
      weight: "bold",
      color: "#00325c",
      font: {
        size: 13
      },
      align: "start"
    },

    datalabels: {
      display: true,
      color: 'black',
      align: 'end',
      padding: {
        right: 2,
      },
    },
    labels: {
      padding: { top: 10 },
      title: {
        font: {
          weight: 'bold',
        },
      },
      value: {
        color: 'green',
      },
    },
    formatter: function (value) {
      return '\n' + value
    },
    legend: {
      position: 'none',
    },
    title: {
      // display: true,
      // text: 'Chart.js Horizontal Bar Chart',
    },
  },

}

const labels = ['Total Tasks', 'Pending Tasks', 'Completed Tasks']
var obj = [
  { label: 'Total', value: pending+complete, days: '30 days' },
  { label: 'Pending', value: pending, days: '30 days' },
  { label: 'Completed', value: complete},

]

// console.log("objectnew",objectnew)
 const data = {
  labels,
  datalabels:{
    color:"blue",
    anchor:"end",
  },
  datasets: [
    {
      data: obj.map((e, index) => `${e.value}`),
      borderColor: 'rgb(151,226,231)',
      backgroundColor: 'rgb(151,226,231)',
      showDatapoints: true
    },
  ],
}

  return <Bar options={options} data={data} objectnew={props.task}/>
}