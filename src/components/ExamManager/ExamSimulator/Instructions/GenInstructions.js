import classes from './GenInstructions.module.css'; 

import Cross from '../../../UI/Icons/Cross'; 
import Modal from '../../../UI/Modal'; 
import { useState } from 'react';

import ExamInstructions from './ExamInstructions'
import InterfaceGuide from './InterfaceGuide'; 

const GenInstructions = props => {

    const [showExamIns, setShowExamIns] = useState(true);   // show examinstructions : true or false
    


    const showExamInstructions = () => {
        setShowExamIns(true); 
    }
    const showInterfaceGuide = () => {
        setShowExamIns(false); 
    }
    // const header = (<Cross filled={false} className={classes.cross} onClick={props.hideInstructions} />);; 
    return (
        
        <div className={classes.container}>
            <div className={classes.buttongroup}>
                <button className={`${classes.btn} ${classes.left} ${showExamIns ? classes.active : classes.inactive}`} onClick={showExamInstructions}>Exam instructions</button>
                <button className={`${classes.btn} ${classes.right} ${showExamIns ? classes.inactive : classes.active}`} onClick={showInterfaceGuide}>Interface guide</button>
            </div>
            <div className={classes.examIns}>
            {showExamIns ? <ExamInstructions/> :  <InterfaceGuide/>}
            </div>
        </div>
       
    )
}

export default GenInstructions; 