
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



const TimeAttemptDistribution = props => {
    // this is a bar chart, that shows :- 
    // time v/s [correct, incorrect, not answered]; 
    // lets do
    
    // bar takes 2 things : data, options 

    // lets arrange data first 
    const data = {
        labels : ['Correct', 'Incorrect', 'Not answered'], 
        datasets : [
            {
                label : 'Time ', 
                data : [130, 50, 30],
                barPercentage: 0.5,
                barThickness: 50,
                maxBarThickness: 50,
                minBarLength: 2,
                backgroundColor: [
                    'rgb(0, 238, 198,0.8)',
                    'rgb(255, 120, 120,0.8)',
                    'rgb(0, 174, 255, 0.8)',
                  ], 
                borderColor : [
                    'rgb(0, 187, 140)',
                    'rgb(255, 0, 0)',
                    'rgb(0, 110, 255)',
                ], 
                borderwidth : 2, 
                borderRadius : 4,
            } 
        ]
            
        
    }

    const options = {
        responsive : true, 
        maintainAspectRatio: true,
        aspectRatio : 16/12,
        plugins: {
            legend : {display : false}, 
            title: {
              display: true,
              text: 'Time spent across result',
              font : {
                  size : 17.5, 
                  family : 'roboto', 
                  weight : 400
              }, 
              color : 'rgb(112, 156, 194)', 
              tooltip : {
                intersect: true,
                backgroundColor: 'rgba(131, 131, 131)',
                callbacks: {
                    label : function (context) { 
                        console.log(context); 
                    }
                }
              },
            },
          },
          interaction: {
            mode: 'index',
            intersect: true,
          }, 
          scales: {
            x: {
              stacked: false,
              
            },
            y: {
              stacked: false, 
              title : {
                display : true, 
                text : 'Time (minutes)', 
                font: {
                  size: 14,
                  family: 'roboto',
                  weight: 400,
              },
              padding: 2,
              color: 'rgb(73, 135, 187)'
              },
              min : 0, 
              max : 180, 
              ticks: {
                stepSize: 15,
                beginAtZero: true
                }
            },
          }
    }

    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    );
}

export default TimeAttemptDistribution; 