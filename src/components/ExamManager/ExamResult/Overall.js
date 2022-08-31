
import classes from './Overall.module.css';
import { Fragment } from 'react';
import { GiBullseye, GiAchievement, GiTargetDummy } from 'react-icons/gi';
import { FaStar, FaCaretRight } from 'react-icons/fa';
import { BiTrophy } from 'react-icons/bi';

import OverallTimeVsYou from './OverallTimeVsYou';
import TimeAttemptDistribution from './TimeAttemptDistribution';
import SubjectTimeDistribution from './SubjectTimeDistribution';
import AccuracyScoreMeter from './AccuracyScoreMeter';
import OverallScoreDistribution from './OverallScoreDistribution';
import IntimeOvertimeAttempts from './IntimeOvertimeAttempts';
import CorrectIncorrectGen from './CorrectIncorrectGen';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overall = props => {

    // important data to pass as props to reusable components 

    // 1. to show overall score distribution (osd) across subjects 
    const osdLabels = ['Phy', 'Chem', 'Maths'];
    const osdDatasets = [
        {
            data : [30,43,80], 
            backgroundColor :[
                'rgb(208, 167, 255,0.8)', 
                'rgb(121, 224, 255,0.6)', 
                'rgb(255, 167, 251,0.6)'
            ], 
            borderColor : [
                'rgb(174, 104, 255)', 
                'rgb(0, 163, 212)',  
                'rgb(179, 0, 170)'
            ], 
            hoverBorderColor : [
                'rgb(208, 167, 255)', 
                'rgb(121, 224, 255)', 
                'rgb(255, 167, 251)'
            ]
        }
    ] 
    const osdTitle = {
        display : false, 
        text : 'some important text'
    }; 
    const osdRadius = {
        cutout : '0%', 
        radius : '40%'
    }

    // 2. to show score distribution across 11th and 12th standerds  (sds)
    const sdsLabels = ['11th', '12th']; 
    const sdsDatasets = [
        {
            data : [59, 100], 
            backgroundColor :[
                '#ff82bc', 
                '#8e8eff', 
            ], 
            borderColor : [
                '#B33771', 
                '#3B3B98',  
            ], 
            hoverBorderColor : [
                'rgb(208, 167, 255)', 
                'rgb(121, 224, 255)', 
            ]
        }
    ]
    const sdsTitle = {
        display : false, 
        text : 'some important text'
    }; 
    const sdsRadius ={
        cutout : '0%', 
        radius : '45%'
    }

    // 3. to show questions levelwise score attempts distribution (qld)
    const qldLabels = ['Easy', 'Medium', 'Hard']; 
    const qldDatasets = [
        {
            data : [60, 40, 25], 
            label : 'correct', 
            backgroundColor : 'rgb(44, 221, 183,0.8)', 
        }, 
        {
            data : [10, 10, 5], 
            label : 'incorrect', 
            backgroundColor : 'rgb(255, 175, 175)'
        }
    ]; 
    const qldTitle = {
        display : true, 
        text : 'Level wise result'
    }; 
    const qldScales = {
        x : {}, 
        y : {
            min :0, 
            max : 150,
            ticks : {
                stepSize : 15
            }
        }
    }


    // 4. to show standerdwise attempts distribution  (sad)
    const  sadLabels = ['11th', '12th']; 
    const sadDatasets = [
        {
            data : [40, 87], 
            label : 'correct', 
            backgroundColor : 'rgb(44, 221, 183,0.8)', 
        }, 
        {
            data : [10, 13], 
            label : 'incorrect', 
            backgroundColor : 'rgb(255, 175, 175)'
        }
    ]
    const sadTitle = {
        display : true, 
        text : 'Standerdwise attmpts distribution'
    }; 
    const sadScales = {
        x : {}, 
        y : {
            min :0, 
            max : 150,
            ticks : {
                stepSize : 15
            }
        }
    }

    // 5. intime & overtime attempts distribution (iod)
    const iodLabels = ['Intime', 'Overtime']; 
    const iodDatasets = [
        {
            data : [90,40], 
            label : 'correct', 
            backgroundColor : 'rgb(44, 221, 183,0.8)', 
        }, 
        {
            data : [10, 10], 
            label : 'incorrect', 
            backgroundColor : 'rgb(255, 175, 175)'
        }
    ]; 
    const iodTitle = {
        display : true, 
        text : 'Intime & Overtime attempts'
    }; 
    const iodScales = {
        x : {}, 
        y : {
            min :0, 
            max : 150,
            ticks : {
                stepSize : 15
            }
        }
    }

    return (
        <div className={classes.container}> 
            <div className={classes.row}>
                <div className={classes.card}>
                    <GiBullseye color='rgb(0, 187, 146)' size="3.0em" className={classes.iconAlign} />
                    <div>
                        <span className={classes.title}>Score in total</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            159 / 200
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
                <div className={classes.card}>
                    <span className={`${classes.alphaIcon} ${classes.alphaP}`}>P</span>
                    <div>
                        <span className={classes.title}>Score in Physics</span>
                        <div className={`${classes.content} ${classes.p}`}>
                            36 / 50
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.m}`}>
                            78 %
                        </div> */}
                    </div>
                </div>
                <div className={classes.card}>
                    <span className={`${classes.alphaIcon} ${classes.alphaC}`}>C</span>
                    <div>
                        <span className={classes.title}>Score in Chemistry</span>
                        <div className={`${classes.content} ${classes.c}`}>
                            45 / 50
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.c}`}>
                            90 %
                        </div> */}
                    </div>

                </div>
                <div className={classes.card}>
                    <span className={`${classes.alphaIcon} ${classes.alphaM}`}>M</span>
                    <div>
                        <span className={classes.title}>Score in Mathematics</span>
                        <div className={`${classes.content} ${classes.m}`}>
                            78 / 100
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.m}`}>
                            78 %
                        </div> */}
                    </div>

                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.card}>
                    <GiAchievement color='rgb(0, 187, 146)' size="3.0em" className={classes.iconAlign} />
                    <div>
                        <span className={classes.title}>Percentile achieved</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            69.53
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
                <div className={classes.card}>
                    <BiTrophy color='rgb(0, 187, 146)' size="3.0em" className={classes.iconAlign} />
                    <div>
                        <span className={classes.title}>Rank secured</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            211
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
                <div className={classes.card}>
                    <FaStar color='rgb(255, 196, 0)' size="2.5em" className={`${classes.iconAlign} ${classes['exam-beh-back']}`} />
                    <div>
                        <span className={classes.title}>Exam behaviour rating</span>
                        <div className={`${classes.content} ${classes['beh-rating']}`}>
                            7.3 / 10
                        </div>
                        {/* <span className={classes.title}>OR</span>
                        <div className={`${classes.content} ${classes.total}`}>
                            79.5 %
                        </div> */}
                    </div>
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.ocard}>
                    <div>
                        <div className={classes.DataTabletitle}>Overall attempt details</div>
                        <div>
                            <table className={classes.dataTable}>
                                <tbody>
                                    <tr>
                                        <td># of questions </td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>150</td>
                                    </tr>
                                    <tr>
                                        <td>Answered</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>136</td>
                                    </tr>
                                    <tr>
                                        <td>Not answered </td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Marked for review</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Answered & marked for review</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>14</td>
                                    </tr>
                                    <tr>
                                        <td>Not visited</td>
                                        <td><FaCaretRight size="1.2em" color="rgb(112, 214, 192)" /></td>
                                        <td>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className={classes.ocard}>
                    <div className={classes.DataTabletitle}>Accuracy score</div>
                    <AccuracyScoreMeter />
                </div>
                <div className={classes.ocard}>
                    <div className={classes.DataTabletitle}>Overall marks distribution </div>
                    <OverallScoreDistribution labels = {osdLabels} datasets={osdDatasets} title={osdTitle} layout={osdRadius}/>
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.barcard}>
                    <CorrectIncorrectGen labels={iodLabels} datasets={iodDatasets} title={iodTitle} scales={iodScales}/>
                </div>
                <div className={classes.barcard}>
                    <TimeAttemptDistribution />
                </div>
                <div className={classes.barcard}>
                    <SubjectTimeDistribution />
                </div>
            </div>

            <div className={classes.row}>
                <div className={classes.barcard}>
                        <CorrectIncorrectGen labels={qldLabels} datasets={qldDatasets} title={qldTitle} scales={qldScales} /> 
                </div>
                <div className={classes.barcard}>
                        <CorrectIncorrectGen labels={sadLabels} datasets={sadDatasets} title={sadTitle} scales={sadScales}/> 
                </div>
                <div className={classes.barcard}>
                    {/* <span style={{fontWeight : 400, color : 'rgb(73, 135, 187,0.8)', paddingTop : '20px'}}>
                        marks across 11th , 12th topics
                    </span> */}
                    <div className={classes.stdTopics}>Standerdwise marks contribution </div>
                    <OverallScoreDistribution labels = {sdsLabels} datasets={sdsDatasets} title={sdsTitle} layout={sdsRadius}/>
                </div>
            </div>
            <div className={classes.row} >
                <div className={classes.overallTimeChart}>
                    <OverallTimeVsYou />
                    <span>note : using this graph you can see at each time , how many questions are answered, marked for review, correctly answered during exam. click or move mouse pointer to see details.</span>
                </div>
            </div>
        </div>
    )
}


export default Overall; 