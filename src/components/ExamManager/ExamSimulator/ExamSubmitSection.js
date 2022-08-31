import classes from './ExamSubmitSection.module.css'; 
import Lock from '../../UI/Icons/Lock';

import QuickAnalysis from './QuickAnalysis';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { examSimActions } from '../../../store';

const ExamSubmitSection = props => {

    const dispatch = useDispatch(); 

    const showSummary = useSelector((state)=> {
        return state.showSummary; 
    }); 

    let isDisabled = true

    const clickHandler = (event) => {
        dispatch(examSimActions.showSummary({show : true})); 
    }

    const closeHandler = (event) => {
        dispatch(examSimActions.showSummary({show : false})); 
    }
    
    return (
        <div className={classes.container}> 
            <button className={classes.examSummary} onClick={clickHandler}>Quick Summary</button>
            <button className={classes.examSubmitDisabled} disabled={true}>{isDisabled && <Lock/>}Submit</button>
            {showSummary && <QuickAnalysis closeHandler={closeHandler}/> }
        </div>
    )

}

export default ExamSubmitSection; 