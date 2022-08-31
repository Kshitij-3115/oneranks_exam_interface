import classes from './Instructions.module.css';
import { Link } from 'react-router-dom';

// import GenInstructions from './ExamSimulator/Instructions/GenInstructions';
import { useState } from 'react';
import ExamInstructions from './ExamSimulator/Instructions/ExamInstructions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Instructions = props => {

    const [showExamIns, setShowExamIns] = useState(true);   // show examinstructions : true or false

    const showExamInstructions = () => {
        setShowExamIns(true);
    }
    const showInterfaceGuide = () => {
        setShowExamIns(false);
    }

    return (
        <div className={classes.container}>
            <div className={classes.buttongroup}>
                <button className={`${classes.btn} ${classes.left} ${showExamIns ? classes.active : classes.inactive}`} onClick={showExamInstructions}>Exam instructions</button>
                <button className={`${classes.btn} ${classes.right} ${showExamIns ? classes.inactive : classes.active}`} onClick={showInterfaceGuide}>Interface guide</button>
            </div>
            {showExamIns ? <ExamInstructions /> : ''}
            {
                <div className={classes.confirmation}>
                    <label class={classes.inpBox}>
                        I read all instructions carefully & I agree to follow these instructions.
                        <input type="checkbox"/>
                        <span class={classes.checkmark}></span>
                    </label>
                    <div className={classes.testTrigger}>
                        <Link to="/exam/simulator"><FontAwesomeIcon icon="play" color='white'/>&nbsp; Start test</Link>
                    </div>
                </div>
            }
        </div>
    )
}

export default Instructions; 