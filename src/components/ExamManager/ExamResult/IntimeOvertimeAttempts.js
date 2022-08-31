import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale, 
    BarElement, 
    Title,
    Tooltip,
    Legend,
    TimeScale,
} from 'chart.js'; 

import {Bar} from 'react-chartjs-2';

// register with chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    TimeScale, 
    Title,
    Tooltip,
    Legend
);

const IntimeOvertimeAttempts = props => {
    // this component is a graph 
    // in this chart we will show , no. of questions v/s intime overtime attempts

    const data = {
        labels : ['Intime', 'Overtime'] , 
        datasets : [
            {   label : 'correct', 
                data : [60,40], 
                backgroundColor : 'rgb(44, 221, 183,0.8)' ,
                barThickness: 50,
                maxBarThickness: 50,
                minBarLength: 2,

                // borderWidth : 0.1, 
                // borderColor : 'green',
                borderRadius : 4
            }, 
            {   label : 'incorrect', 
                data : [10, 10], 
                backgroundColor : 'rgb(255, 175, 175)', 
                barThickness: 50,
                maxBarThickness: 50,
                minBarLength: 2,

                // borderWidth : 0.1, 
                // borderColor : 'red',
                borderRadius : 4
            }
        ], 
    }

    const options = {
        responsive : true, 
        maintainAspectRatio: true,
        aspectRatio : 16/12,
        plugins : {
            title : {
                display : true, 
                text : 'Intime & Overtime attempts', 
                font : {
                    size : 16, 
                    weight : 400, 
                    family : 'roboto'
                }, 
                color : 'rgb(112, 156, 194)', 
            }, 
            legend : {
                display : true, 
                
            }
        }, 
        scales: {
            x: {
                min : 0, 
                max : 150, 
                stacked: true,
                 
            },
            y: {
                min :0, 
                max : 150, 
                stacked: true, 

                ticks: {
                    stepSize: 30,
                    beginAtZero: true
                    }, 
                    title : {
                        display : true, 
                        text : 'number of questions', 
                        font: {
                          size: 14,
                          family: 'roboto',
                          weight: 400,
                      },
                      padding: 2,
                      color: 'rgb(73, 135, 187)'
                    }
            }
          }
    }
    return (
        <div>
            <Bar data={data} options={options} /> 
        </div>
    )
}
export default IntimeOvertimeAttempts; 