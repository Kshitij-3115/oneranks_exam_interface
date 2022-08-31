// in this component a accuracy meter is there. 


import classes from './AccuracyScoreMeter.module.css';

// import chart.js and react-chartjs-2.js stuff here
import {
    Chart as ChartJS,
    CategoryScale, 
    ArcElement, 
    Title,
    Tooltip,
    Legend,
} from 'chart.js'; 

import {Doughnut} from 'react-chartjs-2';

// register with chart.js
ChartJS.register(
    CategoryScale,
    ArcElement, 
    Title,
    Tooltip,
    Legend
);

const AccuracyScoreMeter = props => {    
    // now we will use doughnut chart with text inside here :- 
    
    // data
    const data = {
        labels : ['accuracy', 'inaccuracy'], 
        datasets : [
            {   
                data : [69,31], 
                backgroundColor : [
                    'rgb(1, 211, 158,0.8)', 
                    'rgb(199, 255, 242)'
                ], 
                spacing : 0, 
                hoverBorderColor : [
                    'rgb(1, 211, 158,0.8)', 
                    'rgb(199, 255, 242)'
                ], 
                hoverBorderWidth : 0,
                hoverOffset : 0, 
                
                // borderJoinStyle : 'bavel', 
                // borderColor : [
                //     'green', 
                //     'pink'
                // ], 
                // borderWidth : 2
            }
        ]
    }

    // counter text plugin 
    const counter = {
        id : 'counter', 
        beforeDraw : function(chart, args, options) {
            const {ctx, chartArea : { top , right, bottom, left, width, height}} = chart; 
            ctx.save(); 
            ctx.fillStyle = 'red'; 
            console.log('top', top); 
            console.log('right', right);
            console.log('bottom', bottom); 
            console.log('left', left);
            console.log('widht', width); 
            console.log('height', height);

            // get the position at center - > in this case  width/2, height/2
            // ctx.fillRect(width/2,height/2,5,5); // x0, y0, x1, y1

            

            // how to write text at center that we have found in above step. 
            ctx.font =  options.font.weight + ' ' + options.font.size + 'px ' + options.font.family ;
            
            ctx.textAlign = 'center'; 
            ctx.fillStyle = options.font.color; 
            ctx.fillText(data.datasets[0].data[0] + ' %', width/2,10 + height/2);  
        }
    }
    const options = {
         
        plugins : {
            counter : {
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
        cutout : '60%', 
        radius : '45%', 
        animation : {
            animateScale : false
        },
    }; 

    


    return (
        <div className={classes.container}>
            <Doughnut data={data} options={options} plugins={[counter]} /> 
        </div>


    )
}

export default AccuracyScoreMeter; 