import classes from './QuePallate.module.css';
import Round from './Round.js';
import { Fragment } from 'react'
import { useSelector } from 'react-redux';

const QuePallate = props => {

    // we need while quebank here 
    let data = useSelector((state) => {
        let x = state.queBank;
        let start, end; 
        let sectionName; 
        switch (state.activeSection) {
            case 0:
                // physics section 
                sectionName = 'Physics'
                start = 0; end = 49; 
                break;
            case 1:
                sectionName = 'Chemistry'
                start = 50; end = 99; 
                break;
            case 2:
                sectionName = 'Mathematics'
                start = 100; end = 149; 
                break;
        }
        let l = [] ;
        let isActive ;  
        // we need to display this 'status rounds' section wise 
        for (let i = start; i <= end; i++) {
            isActive = state.activeQuestion === x[i].sno-1 ;  // x[i].sno-1 because activeQuestion starts with 0, but sno starts with 0.
            let y = {
                sno : x[i].sno, 
                status : x[i].status, 
                isActive : isActive, 
                isDemo : false  // it is not for quePalleteDesc component which shows overall status of activeSection
            }
            l.push(y); 
        }
        return {
            queAll : l, 
            activeSection : state.activeSection, 
            sectionName : sectionName
        }
    }); 

    return (
        <Fragment>
            <div className={classes.head}>
                <span>{data.sectionName}</span>
                <p>select questions</p>
            </div>
            <div className={classes.container}>
                <div className={classes.rounds}>
                    {data.queAll.map((element) => {
                        return <Round key={element.sno} index={data.activeSection == 2 ?element.sno-100 : element.sno} status={element.status} activeQuestion isActive={element.isActive} demo={element.isDemo}/>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default QuePallate; 