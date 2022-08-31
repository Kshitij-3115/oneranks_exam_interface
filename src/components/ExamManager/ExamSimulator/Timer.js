import classes from './Timer.module.css';


import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { examSimActions } from '../../../store';


import { useRef } from 'react';
import { useEffect } from 'react';

const Timer = props => {

    const bar1 = useRef(); 
    const bar2 = useRef(); 
    // {time : state.time, pctMinutes : state.pctMinutes, pctSeconds : state.pctSeconds}
    let obj = useSelector((state) => { return state});   // time remaining in seconds
    
    const dispatch = useDispatch();

    let time = obj.time; 
    let pctMinutes = obj.pctMinutes;  
    let pctSeconds = obj.pctSeconds; 
 

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    
 
    

    useEffect(()=> {
        setTimeout(() => {
            // console.log(bar2.current.attributes)
            dispatch(examSimActions.updateTimeCircle({r : 18})); 
        }, 1000);
    },[time]); 
    

    return (
        <div className={classes.container}>
            <div className={classes.minutes}>
                <div>
                    <svg className={classes.svg} width="50" height="50" viewport="0 0 50 50" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">

                        <circle className={classes['bar-bg']} r="18" cx="25" cy="25" fill="transparent" strokeDasharray="615.752"
                            strokeDashoffset="615.752"></circle>
                        <circle ref={bar1} className={classes['bar']} r="18" cx="25" cy="25" fill="transparent" strokeDasharray="113.097"
                            strokeDashoffset={pctMinutes<10 ? `0${pctMinutes}` : pctMinutes}></circle>
                    </svg>
                </div>
                <div className={classes.value}>{minutes}</div>
            </div>
            <span>:</span>
            
            <div className={classes.seconds}>
                <div>
                    <svg className={classes.svg} width="50" height="50" viewport="0 0 50 50" version="1.1"
                        xmlns="http://www.w3.org/2000/svg">

                        <circle className={classes['bar-bg']} r="18" cx="25" cy="25" fill="transparent" strokeDasharray="615.752"
                            strokeDashoffset="615.752"></circle>
                        <circle ref={bar2} className={classes['bar']} r="18" cx="25" cy="25" fill="transparent" strokeDasharray='113.097'
                            strokeDashoffset={pctSeconds}></circle>
                    </svg>
                </div>
                <div className={classes.value}>{seconds<10 ? `0${seconds}` : seconds }</div>
            </div>
           
        </div>
    )
}


export default Timer; 