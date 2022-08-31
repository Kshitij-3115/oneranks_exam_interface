import classes from './ExamManager.module.css';

import { Route } from 'react-router-dom';

import Navbar from '../UI/Navbar';
import ProgressPanel from './ProgressPanel';
import ExamResult from './ExamResult/ExamResult';

import React from 'react';
import ExamProfile from './ExamProfile';
import Instructions from './Instructions';

const ExamManager = props => {

    return (
        <React.Fragment>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.left}>
                    <ProgressPanel />
                </div>
                <div className={classes.right}>
                    <Route path="/exam/confirm-profile" exact>
                        <ExamProfile />
                    </Route>
                    <Route path="/exam/instructions" exact>
                        <Instructions />
                    </Route>
                    <Route path="/exam/result">
                        <ExamResult/>
                    </Route>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ExamManager; 