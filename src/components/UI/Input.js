import classes from './Input.module.css';


const Input = props => {
    /* input types : [checkbox, date, email, password, radio, range, reset,
                      image, number, search, submit, text, time, url, week, tel, file,
                      image, color, datetime-local] 
        note :  this component will handle all of this input types. 
    */

    return (
        <div className={classes.input}>
            <div>
                <label htmlFor={props.input.id}>{props.label}</label>
                <span className={classes['forgot-password']}> <a href="#">{props.input.span}</a> </span>
            </div>
            <div>
                <input {...props.input} />
            </div>

        </div>
    )
}

export default Input; 