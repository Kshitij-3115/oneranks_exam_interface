import classes from './EmailComponent.module.css'; 
import classes1 from './UsernameComponent.module.css';

import Danger from '../../UI/Danger'
import Ok from '../../UI/Ok'; 
import Popover from '../../UI/Popover';
import VerifyEmailC from './VerifyEmailC'; 

import { useState } from 'react';
import { useEffect } from 'react';

const EmailComponent = props => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [isValid, setIsValid] = useState(false);   
    const [message, setMessage] = useState('');   // message to pass popover if invalid input entered. 
    const [isFirstTime, setIsFirstTime] = useState(true);  
    const [isFocused, setIsFocused] = useState(false); 

    useEffect(() => {
        // validity of enteredEmail will be checked here
        let x = checkValidity();  // this will true or false 
        setIsValid(x);
                
    }, [enteredEmail,message]);


    //check email validity :
    const checkValidity = () => {
        let x = enteredEmail; 
        // if(x ==='' || !x.includes('@')) {
        //     setMessage("email should contain @ character"); 
        //     return false;  
        // } else if (x.slice(x.indexOf('@'))===''){ 
        //     setMessage('email should have domain name. eg. gmail.com'); 
        //     return false; 
        // }

        if(x === '') {
            setMessage("email is required!"); 
            return false;
        } else if(!x.includes('@') ) {
            setMessage("eg. john@example.com"); 
            return false; 
        } else if (x.slice(x.indexOf('@')+1)==='') {
            setMessage('email should end with domain. eg. gmail.com'); 
            return false;  
        }
        else {
            setMessage("Email looks perfect"); 
            return true; 
        }
    }

    // ==    SOME JSX MAKING FUNCTIONS   == 
    // this function defines statusIcon jsx 
    const prepareStatus = () => {
        let x; 
        if (isValid){
            x = (<Ok style={okStyle} />)
        } else if (!isValid && isFirstTime) {
            x = ``;   // nothing to display 
        } else {
            x = (<Danger style={dangerStyle} />) 
        }

        return x; 
    }

    // this function prepares popover on different conditions
    const preparePopover = () => {
        let y; 
        if (isValid) {
            // it is a success message
            if (isFocused) {
                y = (<Popover isValid={isValid} message={message}/>)
            } else {
                y = ''  // no popover required
            }
        } else if (isFirstTime) {
            // invalid but its first time
            y = '';  
        } else {
            // invalid - display popover with proper message
            y = (<Popover isValid={isValid} message={message}/>) 
        }

        return y; 
    }


    // some styles : 
    const dangerStyle = {
        'marginLeft': '-8%',
        'marginTop': '6px'
    }

    const okStyle = {
        'marginLeft': '-8%',
        'marginTop': '4px'
    }
    // input content management - two way binding
    const changeHandler = (event) => {
        event.preventDefault();
        let val = event.target.value;
        setEnteredEmail(val);
        setIsFirstTime(false); 
    }
    // focus related events 
    const focusHandler = (event) => {
        setIsFocused(true);  
    }
    const focusLostHandler = (event) => {
        setIsFocused(false); 
        setIsFirstTime(false) 
    }

    return (
        <div className={`${classes1['username-inp']} ${(!isValid && !isFirstTime) && classes1.invalid}`}>
                <label>Email address </label>
                <div className={classes1.input}><input type="email" placeholder="Enter valid email" value={enteredEmail} onChange={changeHandler} onFocus={focusHandler} onBlur={focusLostHandler}/> {prepareStatus()} </div>
                {preparePopover()}  
        </div>
    )
}

export default EmailComponent; 


// note :- 
/* 

*/ 