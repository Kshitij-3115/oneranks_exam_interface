import classes from './QueGeneral.module.css';

import { useSelector } from 'react-redux';

const QueGeneral = props => {

    let que = useSelector((state) => {return state.queBank[state.activeQuestion]}); 
    // things required : sno , question type, marks for correct answer, negative marks
    // get question in 'que' and use its fields 
    return (
        <div className={classes.container}>
            <span className={classes.queType}>Que. {que.sno >100 ? que.sno-100 : que.sno} : {que.type}</span>
            <div>
                <span className={classes.positive}>Marks for correct answer : {que.posMarks}</span>
                <span className={classes.negative}>Negative marks : {que.negMarks}</span>
            </div>
        </div>
    )
}

export default QueGeneral; 