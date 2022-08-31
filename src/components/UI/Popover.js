import { Fragment } from "react"
import classes from './Popover.module.css';

const Popover = props => {
    
    let isvalid = props.isValid; 
    return (
        <Fragment>
            {/* <div className={classes['arrow-up']}></div> */}
            
            <div className={`${isvalid ? classes['valid-popover'] : classes['invalid-popover']} ${classes.popover}`} >{props.message}</div>
        </Fragment>
    )

}

export default Popover; 

