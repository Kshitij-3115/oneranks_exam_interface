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

const LevelWiseAttempts = props => {
    // this component is a graph that shows distribution across Easy, Medium, Hard 

    const labels = props.labels;   // take labels from props
    const datasets = props.datasets; // take datasets from props
    const title = props.title;      // take graph title from props
    const scales = props.scales; 

    // 2 things needed : data , options 
    const data = {
        labels : labels,
        datasets : [
            {   label : datasets[0].label, 
                data : datasets[0].data, 
                backgroundColor : datasets[0].backgroundColor ,
                barThickness: 50,
                maxBarThickness: 50,
                minBarLength: 2,

                // borderWidth : 0.1, 
                // borderColor : 'green',
                borderRadius : 4
            }, 
            {
                label : datasets[1].label, 
                data : datasets[1].data,
                backgroundColor : datasets[1].backgroundColor, 
                barThickness: 50,
                maxBarThickness: 50,
                minBarLength: 2,

                // borderWidth : 0.1, 
                // borderColor : 'red',
                borderRadius : 4
            }
        ]
    }

    const options = {
        responsive : true, 
        maintainAspectRatio: true,
        aspectRatio : 16/12,
        plugins : {
            title : {
                display : title.display, 
                text : title.text, 
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
                stacked: true,
            },
            y: {
                min :scales.y.min, 
                max : scales.y.max, 
                stacked: true, 

                ticks: {
                    stepSize: scales.y.stepSize,
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

export default LevelWiseAttempts; 