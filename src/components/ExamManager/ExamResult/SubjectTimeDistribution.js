// do required imports for chart.js and react-chartjs-2 :- 
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


const SubjectTimeDistribution = props => {

    // in this we will show time spent across different subjects , 
    // we need two things to specify :- data, options 
    // lets do that --- 

    const data = {
        labels : ['Physics', 'Chemistry', 'Mathematics'], 
        datasets : [
            {
                label : 'Time ', 
                data : [60, 30, 90],
                barPercentage: 0.5,
                barThickness: 50,
                maxBarThickness: 50,
                minBarLength: 2,
                backgroundColor: [
                    'rgb(163, 64, 255,0.5)',
                    'rgb(0, 195, 255, 0.5)',
                    'rgb(253, 0, 241, 0.5)',
                  ], 
                borderColor : [
                    'rgb(163, 64, 255)',
                    'rgb(0, 195, 255)',
                    'rgb(253, 0, 241)',
                ], 
                borderwidth : 2 , 
                borderRadius : 4, 

            }
        ],
    }; 

    const options = {
        responsive : true, 
        maintainAspectRatio: true,
        aspectRatio : 16/12, 
        plugins: {
            legend : {display : false}, 
            title: {
              display: true,
              text: 'Time spent across subjects',
              font : {
                  size : 17, 
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
                stepSize: 5,
                beginAtZero: true
                }
            },
          }
    }

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );

}

export default SubjectTimeDistribution; 