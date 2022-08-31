import classes from './OverallTimeVsYou.module.css';

import { useRef } from 'react';

// import chart.js for line graph 
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
// import Line react-chartjs-2 
import { Line } from 'react-chartjs-2';

// register with chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

// OverallTimeVsYou is a line chart that shows, 
// where student was standing at a particular time in exam, eg. 
// # of answered questions till a time, # of correctly answered questions till a time
// # marked questions till a tile. 
// this is no. of questions VS time graph . 
// chart.js and react-chartjs-2 is used to prepare and display graph. 

const OverallTimeVsYou = props => {

    const line = useRef();

    // 2 things to pass to Line - options, data. 

    let labels = [];
    for (let i = 0; i <= 180; i++) {
        labels.push(i);
    }
    let data = {
        labels: labels,
        datasets: [
            {
                label: 'answered',
                data: [0, 0, 0, 1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 7, 8, 9, 9, 10, 10, 10, 11, 12, 12, 13, 13, 14, 14, 16, 17, 18, 19, 22, 25, 25, 26, 28, 30, 31, 31, 32, 33, 34, 34, 35, 36, 36, 37, 38, 40, 41, 43, 45, 46, 47, 48, 49, 50, 53, 53, 54, 55, 56, 56, 57, 57, 57, 58, 58, 58, 58, 59, 59, 59, 59, 60, 62, 64, 65, 66, 69, 70, 71, 72, 73, 73, 74, 76, 76, 77, 78, 78, 79, 80, 81, 81, 83, 83, 83, 83, 83, 84, 84, 85, 87, 88, 89, 90, 91, 93, 94, 95, 100, 101, 101, 101, 102, 102, 102, 102, 103, 103, 103, 103, 103, 104, 105, 105, 105, 105, 106, 106, 106, 106, 107, 107, 108, 109, 110, 110, 110, 110, 110, 111, 112, 113, 114, 115, 116, 117, 118, 118, 119, 119, 119, 120, 120, 120, 121, 121, 122, 122, 123, 125, 126, 126, 128, 129, 130, 132, 133, 133, 135, 136, 135, 137, 140, 143, 144, 147, 150],  // marked & answered + answered 
                // backgroundColor : 'blue', 
                radius: 0,
                borderColor: 'rgb(0, 162, 255,0.6)',
                borderWidth: 3,
                tension: 0
            },
            {
                label: 'correctly answered',
                data: [0, 0, 0, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 8, 8, 9, 9, 10, 10, 12, 13, 14, 15, 18, 21, 21, 22, 24, 25, 26, 26, 27, 28, 29, 29, 30, 31, 31, 32, 33, 35, 36, 38, 40, 41, 42, 43, 44, 45, 48, 48, 49, 50, 51, 52, 52, 52, 52, 53, 53, 53, 53, 54, 54, 54, 54, 55, 56, 58, 59, 60, 63, 64, 64, 65, 66, 66, 67, 69, 69, 70, 71, 71, 72, 73, 74, 74, 76, 76, 76, 76, 76, 77, 77, 78, 80, 81, 81, 82, 83, 85, 86, 87, 91, 92, 92, 92, 93, 93, 93, 93, 94, 94, 94, 94, 94, 95, 96, 96, 96, 96, 97, 97, 97, 97, 97, 97, 98, 99, 100, 100, 100, 100, 100, 100, 100, 100, 101, 102, 103, 104, 105, 105, 105, 105, 105, 105, 105, 105, 106, 106, 107, 107, 109, 110, 111, 111, 113, 114, 115, 117, 118, 118, 120, 121, 120, 122, 125, 128, 129, 126, 125], // correct asnwered
                // backgroundColor : 'green', 
                radius: 0,
                borderColor: 'rgb(0, 187, 146,0.6)',
                borderWidth: 3,
                tension: 0
            },
            {
                label: 'marked for review',
                data: [0, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 9, 10, 10, 10, 11, 11, 11, 10, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 15, 13, 12, 12, 14, 14, 13, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 13, 10, 10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 11, 11, 12, 12, 13, 13, 14, 15, 15, 13, 12, 12, 12, 12, 12, 11, 10, 10, 9, 9, 9, 9, 8, 7, 6, 5, 3, 0, 0, 1, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 6, 7, 8, 9, 9, 10, 10, 10, 11, 11, 11, 10, 12, 12, 13, 14, 14, 15, 16, 12, 11, 10, 10, 10, 9, 8, 8, 8, 8, 8, 8, 8, 8, 7, 7, 7, 7, 10, 9, 9, 9, 8, 7, 7, 7, 7, 7, 6, 3, 8, 9, 10, 6, 7, 8, 9, 5, 4, 3, 2, 1, 0],  // marked for review questions
                // backgroundColor : 'purple', 
                radius: 0,
                borderColor: 'rgba(169, 77, 255, 0.6)',
                borderWidth: 3,
                tension: 0
            }
        ],
    }

    // ANIMATION OF CHART : PROGRESSIVE LINE
    const totalDuration = 10000; // 3 secs
    const delayBetweenPoints = totalDuration / data.labels.length;
    const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(100) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, // the point is initially skipped
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: previousY,
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };



    let options = {
        responsive: true,
        animation: animation,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    font: {
                        size: 14,
                        family: 'roboto'
                    },
                    color: 'grey',
                    pointStyle: 'star',

                    usePointStyle: true
                }
            },
            title: {
                display: true,
                text: 'Your attempts v/s Time during exam',
                font: {
                    family: 'roboto',
                    size: 18,
                    weight: 400,
                },
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            tooltip: {
                intersect: false,
                backgroundColor: 'rgba(131, 131, 131)',
                usePointStyle : true, 
                callbacks: {
                    title: function (context) {
                        let title = `At time : ${context[0].label} minutes`;  
                        return title; 
                    }, 
                    label : function (context) {
                        console.log(context); 
                        let label = `${context.dataset.label}`; 
                        let str = label + ` : ${context.parsed.y} questions` 

                        return str; 
                    }, 
                    labelPointStyle: function(context) {
                        return {
                            pointStyle: 'star',
                            rotation: 0
                        };
                    }

                }

            }
        },
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'time (minutes)',
                    font: {
                        size: 16,
                        family: 'roboto',
                        weight: 400,
                    },
                    padding: 15,
                    color: 'rgb(73, 135, 187)'
                },
                ticks: {
                    stepSize: 10,
                    beginAtZero: true
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'number of questions',
                    font: {
                        size: 16,
                        family: 'roboto',
                        weight: 400
                    },
                    padding: 15,
                    color: 'rgb(255, 144, 100)'
                },
                ticks: {
                    stepSize: 15,
                    beginAtZero: true
                }

            }

        }
    }


    return (
        <div className={classes.container}>
            <Line data={data} options={options} />
        </div>

    );
}

export default OverallTimeVsYou;
