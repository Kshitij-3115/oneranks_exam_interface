import classes from './ExamResult.module.css';

import { Route, Link } from 'react-router-dom';
import Overall from '../ExamResult/Overall';
import { SiGoogleanalytics } from 'react-icons/si';
import {BsCaretDownFill} from 'react-icons/bs'; 

import Subjectwise from './Subjectwise'; 

import {Strength} from './Strength'; 
import Explanations from './Explainations';
import Leaderboard from './Leaderboard';
import EnvelopeBox from './EnvelopeBox';

const ExamResult = props => {


    return (
        <div className={classes.container}>

            <div className={classes.topnav}>
                <div className={classes.navheader}> <SiGoogleanalytics className={classes.SiGoogleanalytics} />Analysis dashboard</div>
                <div className={classes.navigation}>
                    <Link to="/exam/result/overall" className={classes.active}>Overall</Link>
                    <div className={classes.dropdown}>
                        <button className={classes.dropbtn}>
                            Subjectwise <BsCaretDownFill size = "1.1em" className={classes.faAngleDown}/> 
                        </button>
                        <div className={classes.dropdownContent}>
                            <Link to="/exam/result/subjectwise/physics">Physics</Link>
                            <Link to="/exam/result/subjectwise/chemistry">Chemistry</Link>
                            <Link to="/exam/result/subjectwise/maths">Maths</Link>
                        </div>
                    </div>
                    <div class={classes.dropdown}>
                        <button class={classes.dropbtn}>
                        Strength <BsCaretDownFill size = "1.1em" className={classes.faAngleDown}/> 
                        </button>
                        <div class={classes.dropdownContent}>
                            <Link to="/exam/result/strength/chapterwise">Chapterwise</Link>
                            <Link to="/exam/result/strength/topicwise">Topicwise</Link>
                        </div>
                    </div>
                    {/* <Link to="/exam/result/topicwise">Topicwise</Link> */}
                    <Link to="/exam/result/explainations">Explanations</Link>
                    {/* <a href="#">Time machine</a> */}
                    <Link to="/exam/result/leaderboard">Leaderboard</Link>
                </div>
            </div>
            <div className={classes.content}>
                <Route path="/exam/result/" exact>
                    <EnvelopeBox /> 
                </Route>
                <Route path="/exam/result/overall" exact>
                    <Overall />
                </Route>
                <Route path="/exam/result/subjectwise/:value" exact>
                    <Subjectwise /> 
                </Route>
                <Route path="/exam/result/strength/:value" exact>
                    <Strength /> 
                </Route> 
                <Route path="/exam/result/explainations" exact>
                    <Explanations /> 
                </Route>
                <Route path="/exam/result/leaderboard" exact>
                    <Leaderboard /> 
                </Route>
            </div>
        </div>
    )
}

export default ExamResult; 