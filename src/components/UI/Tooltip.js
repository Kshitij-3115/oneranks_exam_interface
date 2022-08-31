import classes from './Tooltip.module.css'; 

const Tooltip = props => {
    // a wrapper component to 
    return (
        <div className={classes.tooltip}>
            {props.children}
            <span className={classes.tooltiptext}>{props.message}</span>
        </div>
    )
}

export default Tooltip; 