import classes from './Strength.module.css';

import Filterbar from './Filterbar';
import Modal from '../../UI/Modal';
import Cross from '../../UI/Icons/Cross';

import { GoPrimitiveDot } from 'react-icons/go';

import { FaRegHandPointRight, FaCheck, FaTimes, FaClock } from 'react-icons/fa';
import {MdPublic} from 'react-icons/md'; 

import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from 'react';
import {useParams} from 'react-router-dom'

const Strength = props => {
    // this component processes/shows chapterwise/topicwise strength analysis of exam. 
    // at top : filter bar (Filterbar) component is rendered. : to filter the result

    const value = useParams().value;  // take value : chapterwise OR topicwise ? 

    // if it is chapterwise then collect chapterwise data and display , else collect topicwise data and display
    if (value ==='chapterwise') {
        // fetch chapterwise data from server or localstorage 
        // do it later
    } else if (value==='topicwise'){
        // fetch topicwise data from server or localstorage 
        // do it later 
    }

    // MANAGE QUICK LOOK MODAL POP UP HERE 
    const [isQuickLook, setIsQuickLook] = useState(false);
    // show quick look 
    const showQuickLook = () => {
        setIsQuickLook(true);
    }
    // close quick look 
    const closeQuickLook = () => {
        setIsQuickLook(false);
    }

    return (
        <div className={classes.container}>
            <Filterbar isSort={true}/>
            <div className={classes.dataBody}>
                {isQuickLook && <QuickLook closeHandler={closeQuickLook} />}
                <table className={classes.dataTable}>
                    <thead className={classes.thead}>
                        <tr className={classes.hrow}>
                            <th>{value === 'chapterwise' ? 'Chapter name' : 'Topic name'}</th>
                            <th>tags</th>
                            <th>appeared in</th>
                            <th>Frequency</th>
                            <th>Strength meter</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className={classes.tbody}>
                        <tr>
                            <td>Quadratic equations</td>
                            <td>maths , easy, 11th</td>
                            <td><Appearance /> </td>
                            <td>4</td>
                            <td><StrengthMeter strength={40} /></td>
                            <td>
                                <button className={classes.qlook} onClick={showQuickLook}>Quick look</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Straight lines</td>
                            <td>maths , easy, 11th</td>
                            <td><Appearance /> </td>
                            <td>4</td>
                            <td><StrengthMeter strength={70} /></td>
                            <td>
                                <button className={classes.qlook}>Quick look</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Conic sections</td>
                            <td>maths , easy, 11th</td>
                            <td><Appearance /> </td>
                            <td>4</td>
                            <td><StrengthMeter strength={80} /></td>
                            <td>
                                <button className={classes.qlook}>Quick look</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Differential equations</td>
                            <td>maths , easy, 11th</td>
                            <td><Appearance /> </td>
                            <td>4</td>
                            <td><StrengthMeter strength={91} /></td>
                            <td>
                                <button className={classes.qlook}>Quick look</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Definate integration</td>
                            <td>maths , easy, 11th</td>
                            <td><Appearance /> </td>
                            <td>4</td>
                            <td><StrengthMeter strength={38} /></td>
                            <td>
                                <button className={classes.qlook}>Quick look</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// SUPPORTING COMPONENTS 
const Appearance = props => {

    // it will get a list of question numbers from props
    let que = [
        {
            qno: 23,
            status: 'CORR',    // possible : correct (CORR), incorrect(INCORR), not answered (NANS)
        },
        {
            qno: 27,
            status: 'CORR'
        },
        {
            qno: 31,
            status: 'INCORR'
        },
        {
            qno: 37,
            status: 'NANS'
        }
    ];

    return (
        <div className={classes.appearBox}>
            {que.map((ele) => {
                // decide its color depends on status
                let x;
                switch (ele.status) {
                    case 'CORR':
                        x = classes.corr;
                        break;
                    case 'INCORR':
                        x = classes.incorr;
                        break;
                    case 'NANS':
                        x = classes.nans
                        break;
                }
                return <span className={`${classes.qno} ${x}`}>{ele.qno}</span>
            })

            }
        </div>
    )
}

const StrengthMeter = props => {

    // this will get a strength percentage from props 
    let perc = props.strength;

    // decide colors depending upon 'perc' interval : 
    // perc > 80 : strong 
    // 40 < perc <= 80  : medium  
    // perc <= 40 : weak 

    let bgColor, baseBgColor, customLabel, labelAlign, labelColor;
    if (perc > 80) {
        bgColor = 'rgb(0, 165, 129,0.8)';
        baseBgColor = 'rgb(169, 255, 236)';
        customLabel = `${perc} %`;
    } else if (perc <= 80 && perc > 40) {
        bgColor = 'rgb(190, 140, 0, 0.8)';
        baseBgColor = 'rgb(255, 235, 185)';
        customLabel = `${perc} %`;
    } else if (perc <= 40) {
        bgColor = 'rgb(255, 70, 70,0.8)';
        baseBgColor = 'rgb(255, 221, 221)';
        customLabel = `${perc} %`;
    }

    if (perc < 30) {
        labelAlign = 'outside';
        labelColor = 'green'
    } else {
        labelAlign = 'center';
        labelColor = 'white'
    }

    return (
        <ProgressBar
            completed={perc}
            bgColor={bgColor}
            customLabel={customLabel}
            height='20px'
            borderRadius='10px'
            baseBgColor={baseBgColor}
            labelAlignment={labelAlign}
            labelColor={labelColor}
            labelSize='16px'
            transitionDuration='2s'
            transitionTimingFunction='ease-in-out'
            labelClassName={classes.strengthLabel}
        />
    );
}

const QuickLook = props => {

    const header = (<Cross filled={false} className={classes.cross} onClick={props.closeHandler} />);
    return (
        <Modal header={header}>
            <div className={classes.quickheader}>
                <div className={classes.ql}>Quick look </div>
                <div className={classes.rightThumb}><FaRegHandPointRight size='1.2em' color='purple' style={{ transform: 'translateY(3px)', marginRight: '10px' }} /> </div>
                <Appearance />
            </div>
            <div className={classes.quickbody}>
                {/* render all questions here */}
                <QueFrame status="correct" />
                <QueFrame status="correct" />
                <QueFrame status="na" />
                <QueFrame status="incorrect" />
            </div>
        </Modal>
    )
}

const QueFrame = props => {

    let statusC = '';
    let statusX;
    let x = props.status === 'na' ? (statusX = classes.queStatusNA, statusC = 'not answered') : (props.status === 'correct' ? (statusX = classes.queStatusCorr, statusC = 'correct') : (statusX = classes.queStatusIncorr, statusC = 'incorrect'));

    const [activeClass,setActiveClass ] = useState(''); 

    // handle collapse div
    const collapseHandler = event => {
        
        if(activeClass ==='') {
            setActiveClass(classes.active); 
        } else {
            setActiveClass(''); 
        }

        var content = event.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    return (
        <div className={classes.queFrame}>
            <div className={classes.topBar}>
                <div>
                    <span className={classes.queno}>23</span>
                    <span className={`${classes.queStatus} ${statusX}`}>{statusC}</span>
                </div>
                <div className={classes.queInfo}>
                    {
                        props.showExtras && 
                        <div className={classes.extraInfo}> 
                            <div className={classes.timeSpent}>
                                <FaClock size="1.1em" color="rgb(0, 132, 255)" style={{marginRight : '5px', transform:'translateY(1px)'}}/> 
                                <span>your time spent : 3.3 sec</span> 
                            </div>
                            <div className={classes.avgPublicTime}>
                                <MdPublic size="1.2em" color="rgb(0, 132, 255)" style={{marginRight : '5px'}}/> 
                                <span>other's time spent : 2.6 sec</span> 
                            </div>
                            <div className={classes.globalAccuracy}>
                                <span> <span style={{color : 'rgb(134, 85, 182)'}}>48.2%</span> students answered correctly</span>
                            </div>
                        </div>
                    }
                    <span className={classes.queInfoSub}>maths</span>
                    < GoPrimitiveDot size="0.7em" color='rgb(166, 160, 200)' style={{ transform: 'translateY(4px)' }} />
                    <span className={classes.queInfoStand}>11th</span>
                </div>
            </div>
            <div className={classes.queC}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, quasi exercitationem! Dolorum, voluptas a? Architecto minima veritatis cum quo commodi ex, ab quam! Est ea ipsa ipsum asperiores. Officia, a.
            </div>
            <div className={classes.options}>
                <OptBar seq="A" ans={true} sel={false} />
                <OptBar seq="B" ans={false} sel={false} />
                <OptBar seq="C" ans={false} sel={false} />
                <OptBar seq="D" ans={false} sel={true} />
            </div>
            <div className={classes.solution}>
                <button className={`${classes.collapsible} ${activeClass}` } onClick={collapseHandler}>Solution/Explaination</button>
                <div className={classes.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

const OptBar = props => {

    // this is option div
    // this glows in different colors 
    // correct : green, 
    // incorrect : red, 
    // normal : grey 

    // props.sel , props.ans will decide what is going to happen

    let xCorr = props.ans ? classes.greenOpt : (props.sel ? classes.redOpt : classes.normalOpt);    // greenOpt, redOpt, normalOpt 
    let xOptBar = props.ans ? classes.greenOptBar : (props.sel ? classes.redOptBar : classes.normalOptBar);  // greenOptBar, redOptBar, normalOptBar

    return (
        <div className={`${classes.optbar} ${xOptBar}`}>
            <div className={classes.optLeft}>
                <div className={classes.optdiv}>
                    <span className={`${classes.opt} ${xCorr}`}>{props.seq}</span>
                </div>
                <div className={classes.optC}>
                    Lorem ipsum dolor sit amet Lorem ipsum sit amet
                </div>
            </div>
            {props.ans && <span className={classes.check} > <FaCheck color='rgb(0, 168, 115)' /> </span>}
            {(props.sel && !props.ans) && <span className={classes.check} > <FaTimes color='red' /> </span>}
        </div>
    )
}

export { Strength,  QueFrame}; 