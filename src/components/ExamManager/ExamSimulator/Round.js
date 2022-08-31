import classes from './Round.module.css'; 
import Dot from '../../UI/Icons/Dot';
import Circle from '../../UI/Icons/Circle';
import { useDispatch } from 'react-redux';

import { examSimActions } from '../../../store';

const Round = props => {
    let x = props.index;  

    const dispatch = useDispatch();

    let classMap = new Map(); 
    // type to associated round style class mapping
    classMap.set('NV', classes.notVisited);
    classMap.set('NA', classes.notAnswered);
    classMap.set('A', classes.answered);
    classMap.set('MTVL', classes.markedToViewLater);
    classMap.set('C', classes.current);   
    classMap.set('AM', classes.answeredAndMarked); 

    const clickHandler = (event) => {
        // render the clicked 'rounds' index question 
        // render this round is 'props.index' index. which is 1 based. 
        // update activeQuestion to this new index
        let index = props.index - 1; //make it 0 based
        dispatch(examSimActions.updateActiveQuestion({index : index})); 
    }

    return (
        <div className={`${props.demo? classes.demoRound : classes.round} ${classMap.get(props.status)}`} onClick={clickHandler}>
            {props.index} <div className={classes.currentDot}>{props.isActive && <Dot/>}</div>
            {props.status == 'AM' && <div className={`${props.demo? classes.greenCircleDemoFilled : (props.isActive ? classes.greenCircleFilledActive : classes.greenCircleFilled)} `}><Circle/></div> }
        </div>
    )
}

export default Round; 