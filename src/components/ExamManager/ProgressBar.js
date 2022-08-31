import classes from './ProgressBar.module.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProgressBar = props => {

    return (
        <div className={classes.container}>
            <ol className={classes.list}>
                <li className={classes.item}>
                    <div className={`${classes.round} ${classes['round-current']} ${classes['round-success']}`}><FontAwesomeIcon icon="user" color='rgb(1, 129, 233)'/></div>
                    <p>Confirm exam profile details</p>
                </li>
                <li className={`${classes.divider} ${classes['divider-success']}`}></li>
                <li className={classes.item}>
                    <div className={`${classes.round} ${classes['round-success']}`}><FontAwesomeIcon icon="book" color="rgb(1, 129, 233)"/></div>
                    <p>Read exam instructions</p>
                </li>
                <li className={classes.divider}></li>
                <li className={classes.item}>
                    <div className={classes.round}><FontAwesomeIcon icon="pen-square" color='rgb(1, 129, 233)'/></div>
                    <p>Attempt exam and submit responses</p>
                </li>
                <li className={classes.divider}></li>
                <li className={classes.item}>
                    <div className={classes.round}><FontAwesomeIcon icon="chart-bar" color='rgb(1, 129, 233)'/></div>
                    <p>Result analysis & Leaderboard</p>
                </li>
            </ol>
        </div>
    )
}



export default ProgressBar; 

