import classes from './Question.module.css'; 
import QueContent from './QueContent'; 
import QueOptions from './QueOptions'; 

import { useSelector } from 'react-redux';
 
const Question = props => {

    let que = useSelector((state) => {return state.queBank[state.activeQuestion]}); 

    // this component should know which question to display via 'props'. 
    // after clicking on 'save & next', this response will be saved and next question should be rendered. 
    // after clicking on 'previous', previous question should be rendered. 
    // after clicking on 'mark for review & next', if question is answered, then mark it & store it's response --  and render next question, else just mark this question and move furhter.  

    // props :- currentQue 
    let queC = que.queC; 
    let queOpt = que.queOpt; 


    return (
        <div className={classes.container}>
            <QueContent queC={queC}/> 
            <QueOptions queOpt={queOpt}/> 
        </div>
    )
}

export default Question; 