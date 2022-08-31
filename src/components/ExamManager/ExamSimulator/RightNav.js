import classes from './RightNav.module.css'; 
import RightHead from './RightHead';
import QuePallate from './QuePallate';
import QPallateDesc from './QPallateDesc';
import ExamSubmitSection from './ExamSubmitSection';

const RightNav = props => {

    return (
        <div className={classes.container}>
            <RightHead/> 
            <QPallateDesc/>   
            <QuePallate/>
            <ExamSubmitSection/>
        </div>
    )
}

export default RightNav; 