import classes from './ProgressPanel.module.css'; 
import ProgressBar from './ProgressBar';

const ProgressPanel = props => {



    // this is progress panel which resides at left and track, progress of overall exam process. 
    // steps : 1. confirmExamProfile   2. read instructions  3. attempt exam  4. result analysis 
    return (
        <div className={classes.container}>
            <ProgressBar/> 
        </div>
    )
}

export default ProgressPanel; 