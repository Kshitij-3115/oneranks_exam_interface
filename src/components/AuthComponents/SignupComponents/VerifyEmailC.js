import classes from './VerifyEmailC.module.css'; 

const VerifyEmailC = props => {

    return (
        <div className={classes.container}>
            <button className={classes['send-code-btn']}>Send code</button>
            <input type="text" placeholder='code'/>
            <button className={classes['verify-code-btn']}>Verify</button>
        </div>
    )
}

export default VerifyEmailC; 

// notes :- 
/*

*/ 