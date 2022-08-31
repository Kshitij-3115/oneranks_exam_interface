import classes from './SectionCtrl.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import Timer from './Timer'; 

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { examSimActions } from '../../../store';

const LockFill = props => {

    let styles = {
        marginRight: '5px'
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={styles} width="15" height="15" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
        </svg>
    )
}

const UnlockFill = props => {

    let styles = {
        marginRight: '5px'
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={styles} width="15" height="15" fill="currentColor" className="bi bi-unlock-fill" viewBox="0 0 16 16">
            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
        </svg>
    )
}

const SectionCtrl = props => {

    const dispatch = useDispatch(); 
    let data = useSelector((state) => {return {isPCDone : state.isPCDone, activeSection : state.activeSection}});  // show if 'physics-chemistry' section completed or not
 
    let x,y,z; 
    // take activeSection from store, then manage style accordingly
    // on clicking, display update activeSection in store 


    x = `${data.isPCDone ? classes.m : classes.c} ${data.isPCDone ? classes.disabled : (data.activeSection === 0 ? classes.active : classes.unactive)}`;
    y = `${data.isPCDone ? classes.m : classes.c} ${data.isPCDone ? classes.disabled : (data.activeSection === 1 ? classes.active : classes.unactive)}`;
    z = `${data.isPCDone ? classes.c : classes.m} ${!data.isPCDone ? classes.disabled : (data.activeSection === 2 ? classes.active : classes.unactive)}`; 

    const clickHandler = (event) => {
        let id = event.target.id; 
        if (id==='physics' && !data.isPCDone) {
            // display phyisics section - change its style , question pallate should display only physics 'rounds'
            dispatch(examSimActions.updateCurrentSection(0))
            dispatch(examSimActions.updateActiveQuestion({index : 0})); 
        }
        if (id === 'chemistry' && !data.isPCDone) {
            // display chemistry section - change its style
            dispatch(examSimActions.updateCurrentSection(1))
            dispatch(examSimActions.updateActiveQuestion({index:50})); 
        }
        if(id === 'maths' && data.isPCDone) {
            // now 'physics-chemistry' section is closed and only 'maths' is active 
            dispatch(examSimActions.updateCurrentSection(2))
            dispatch(examSimActions.updateActiveQuestion({index : 100})); 
        }
    }

    return (
        <div className={classes.container}>
            <button id='physics'  disabled = {data.isPCDone} className={x} onClick={clickHandler}>{data.isPCDone ? <LockFill/> : <UnlockFill/>}Physics</button>
            <button id='chemistry'  disabled = {data.isPCDone} className={y} onClick={clickHandler}>{data.isPCDone ? <LockFill/> : <UnlockFill/>}Chemistry</button>
            <button id='maths'  disabled = {!data.isPCDone} className={z} onClick={clickHandler}>{!data.isPCDone ? <LockFill/> : <UnlockFill/>}Mathematics</button>
            <div className={classes.timer}>
                <Timer/> 
            </div>
        </div>
    )
}

export default SectionCtrl; 