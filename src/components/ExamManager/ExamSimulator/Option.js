import classes from './Option.module.css';
import {useRef} from 'react';

import { useDispatch } from 'react-redux';
import { examSimActions } from '../../../store';


const Option = props => {

    const checkBox = useRef();  
    const dispatch = useDispatch(); 
     
    
    const clickHandler = () => { 
        let index = props.index; 
        dispatch(examSimActions.updateSelected({checkBox,index})); 
        // selectHandler(checkBox, index);   
    }

 
    // props : optC 
    return (
        <div className={`${classes.container} ${props.sel ? classes['container-selected'] : ''}`}  onClick={clickHandler}>
                <input type="checkbox" ref={checkBox} className={classes['opt-radio']} name="radio" />
                <div className={classes.opt} >{props.opt}</div>
                <span className={`${classes['opt-span']}  ${props.sel ? classes['opt-span-selected'] : ''}`} dangerouslySetInnerHTML={{__html: `${props.optC}`}}></span>
        </div>
    )
}

export default Option; 