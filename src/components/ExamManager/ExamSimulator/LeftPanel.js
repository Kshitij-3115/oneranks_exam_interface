import Header from './Header'; 
import SectionCtrl from './SectionCtrl'; 

import classes from './LeftPanel.module.css'; 
import QueGeneral from './QueGeneral';
import Question from './Question';
import Navigator from './Navigator'

const LeftPanel = props => {

    return (
        <div className={classes.container}>
            <Header/> 
            <SectionCtrl/>
            <QueGeneral/>
            <Question/>
            <Navigator /> 
        </div>
    )
}

export default LeftPanel; 