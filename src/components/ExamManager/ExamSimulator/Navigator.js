import classes from './Navigator.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { examSimActions } from '../../../store';

const LeftIcon = props => {
    let styles = {
        marginTop: '3px',
        marginRight: '7px'
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={styles} width="15" height="15" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
    )
}

const RightIcon = props => {
    let styles = {
        marginLeft: '7px'
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={styles} width="15" height="15" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
    )
}

const Navigator = props => {

    const data = useSelector((state)=> { 
        return {isLastQuestion : state.isLastQuestion, isFirstQuestion : state.isFirstQuestion, activeQuestion : state.activeQuestion}
    });

    const dispatch = useDispatch(); 
    // prev : render previous question 
    // save & next : make this question as (answered=true status='A') & render next question 
    // mark for review & next : two cases 
    //          case 1 : if option is selected then make this question as (answered=true status='AM') 
    //          case 2 : if option is not selected, then make this question as (answered=false status='MTVL') 
  
  
    const previousHandler = (event) => {
        // just render previous question
        let pre = data.activeQuestion - 1; 
        dispatch(examSimActions.updateActiveQuestion({index : pre}));  
    }

    const markToViewLaterHandler = (event) => {
        // mark to view later --> either 'answered and maarked to view later' or 'marked to view later' 
        dispatch(examSimActions.markToViewLater());  
        let next = data.activeQuestion + 1; 
        dispatch(examSimActions.updateActiveQuestion({index : next})); 
    }

    const saveAndNextHandler = (event) => {
        // save this questions response in queBank array 
        dispatch(examSimActions.saveAndNext()); 
        // update activeQuestion 
        let next = data.activeQuestion + 1; 
        dispatch(examSimActions.updateActiveQuestion({index : next})); 
    }; 

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                {!data.isFirstQuestion && <button className={classes.prev} onClick={previousHandler}><LeftIcon />Previous</button>}
                <button className={classes.mreview} onClick={markToViewLaterHandler}>Mark for review & Next</button>
            </div>
            <div className={classes.right}>
                {!data.isLastQuestion && <button className={classes.prev} onClick={saveAndNextHandler}>Save & Next<RightIcon/></button>}
            </div>
        </div>
    )
}

export default Navigator; 