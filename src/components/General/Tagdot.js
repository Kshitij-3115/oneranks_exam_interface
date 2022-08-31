
import { useState } from 'react';
import classes from './Tagdot.module.css'; 

const Tagdot = props => {

    const [plus,setPlus] = useState(false)
    // props : type : decides which tag(color) to show 
    let tagMap = new Map(); 
    // set values 
    tagMap.set('red', classes.red); 
    tagMap.set('orange', classes.orange);
    tagMap.set('green', classes.green);
    tagMap.set('blue', classes.blue);
    tagMap.set('magenta', classes.magenta);
    tagMap.set('indigo', classes.indigo);
    tagMap.set('cyan', classes.cyan);

    const mouseOverHandler = event => {
        setPlus(true);  
    }
    const mouseLeaveHandler = event => {
        setPlus(false); 
    }

    const clickHandler = event => {
        if (!props.demo) {
            props.onClickHandler(props.type)
        }
    }
        return (
        <div className={`${props.demo ? classes.demodot : classes.dot} ${tagMap.get(props.type)}` } onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler} onClick={clickHandler}>
            {props.demo ? '' : (props.added ? plus && <div>-</div> : plus && <div>+</div>)}
        </div>
    )
}

export default Tagdot; 