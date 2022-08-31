
// import chart.js and react-chartjs-2.js stuff here
import {
    Chart as ChartJS,
    CategoryScale, 
    ArcElement, 
    Title,
    Tooltip,
    Legend,
} from 'chart.js'; 

import {Pie} from 'react-chartjs-2';

// register with chart.js
ChartJS.register(
    CategoryScale,
    ArcElement, 
    Title,
    Tooltip,
    Legend
);

const OverallScoreDistribution = props => {

    // in this component,  we will use a pie chart with externral labels plugin 
    // this chart shows - score obtained in each subject in a graphical way. 

    // three things : data, options, plugins 
    // lets do all these things here 

    const labels = props.labels;  // labels array : take from props 
    const datasets = props.datasets; // datasets array : take from props
    const title = props.title;   // info about chart title 
    const layout = props.layout;  // cutout , radius for circle
    // datasets contains following :-
    // data , backgroundColors, borderColors, hoverBorderColors, 
    

    // data ------- 
    const data = {
        labels : labels, 
        datasets : [
            {
                data : datasets[0].data, 
                backgroundColor : datasets[0].backgroundColor, 
                spacing : 0, 
                borderColor : datasets[0].borderColor,
                borderWidth : 0, 
                hoverBorderColor : datasets[0].hoverBorderColor, 
                hoverBorderWidth : 0,
                hoverOffset : 0,
            }
        ]
    }
    // plugins here -----
    const pieLabelsLine = {
        id : 'pieLabelsLine', 
        afterDraw : function (chart, args, options) {
            // after draw - add these lines 
            const {ctx, chartArea : {top, bottom, left, right, width, height}} = chart; 

            // datasets 
            chart.data.datasets.forEach((dataset, i) => {
                chart.getDatasetMeta(i).data.forEach((datapoint,index) => {
                    const {x,y} = datapoint.tooltipPosition(); 
                    // x,y : position of tooltip . we will start drawing line, originating for x,y
                    // ctx.fillStyle = dataset.borderColor[index]; 
                    // ctx.fillStyle = 'rgb(112, 150, 172)'; 
                    // ctx.fillRect(x,y, 10,10); 

                    // now the concern is drawing line in correct direction 


                    // draw a line 
                    const halfwidth = width/2; 
                    const halfheight = height/2; 

                    // decide whether to move up or down 
                    const xLine = x >= halfwidth ? x + 40 : x - 40; 
                    const yLine = y >= halfheight ? y + 40 : y - 40; 
                    const extraLine = x >= halfheight ? 20 : -20 ; 

                    console.log('demo ' , x,y);
                    console.log('to', xLine, yLine);

                    ctx.beginPath() ;  // start drawing something
                    ctx.moveTo(x,y); // start from here
                    ctx.lineTo(xLine, yLine); // a simple horizontal line
                    ctx.lineTo(xLine+extraLine, yLine);  //extra horizontal line
                    ctx.strokeStyle = dataset.borderColor[index]; 
                    ctx.lineWidth = 1.5; 
                    ctx.stroke(); 

                    // for text 
                    const textXPosition = x >= halfwidth ? 'left' : 'right'; 
                    const textMove = x>= halfwidth ? 5 : -5 ; 
                    ctx.font = '500 12px roboto'; 
                    ctx.fillStyle = dataset.borderColor[index]; 

                    ctx.textAlign = textXPosition; 
                    ctx.textBaseline = 'middle';
                    console.log(chart.data.labels);  
                    ctx.fillText(chart.data.labels[index] + ' (' + dataset.data[index] + ') ', xLine+extraLine +textMove, yLine); 

                });
            }); 
        }
    }
    // options here -------
    const options = {
        layout : {
            padding : 10, 
        }, 
        plugins : {
            title : {
                display : title.display, 
                text : title.text, 
                font : {
                    family : 'roboto', 
                    size : 17, 
                    color : 'grey'
                }
            }, 
            pieLabelsLine : {
                font : {
                    color : 'purple', 
                    family : 'roboto', 
                    size : 25, 
                    weight : 500, 
                }
            },  
            legend : {
                display : false
            },    
            tooltip : {
                enabled : false
            }, 
        }, 
        cutout : layout.cutout, 
        radius : layout.radius, 
        animation : {
            animateScale : true
        },
    }

    // style 
    const styles = {
        marginTop : '-80px',
        padding : '10px', 
        minWidth : '360px'
    }

    return (
        <div style={styles}>
            <Pie data={data} options={options} plugins={[pieLabelsLine]}/> 
        </div>
    )

}

export default OverallScoreDistribution; 