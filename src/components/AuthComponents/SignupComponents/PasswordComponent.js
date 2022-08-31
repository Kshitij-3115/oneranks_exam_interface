import classes from './PasswordComponent.module.css';

import { useEffect, useState } from 'react';
import {useRef} from 'react'; 

import Popover from '../../UI/Popover';



const PasswordComponent = props => {
    //for input value : two way binding
    const [enteredPassword, setEnteredPassword] = useState('');
    // input validity
    const [isValid, setIsValid] = useState(false);
    // manage focus of input fields
    const [isFocused, setIsFocused] = useState(false);
    // manage if it is first render or not
    const [isFirstTime, setIsFirstTime] = useState(true);
    // message to show in popover 
    const [message, setMessage] = useState(''); 
    // useRef 
    const passwordInp = useRef(); 

    const haveSpecialChar = () => {
        let x = enteredPassword; 
        if (/[@#&-*%$]/.test(x)) {
            console.log('entered'); 
            return true; 
        } else {
            return false; 
        }
    }

    const haveDigit = () => {
        let x = enteredPassword; 
        if (/[0-9]/.test(x)) {
            return true; 
        } else {
            return false; 
        }
        
    }

    const checkValidity = () => {
        let x = enteredPassword; 

        if (x.length<6) {
            setMessage(`password must atleast 6 characters long.`); 
            setIsValid(false);  
        } 
        else if(!haveSpecialChar()) {
            setMessage(`make sure it contains atleast a special character (@ # & - * % $)`); 
            setIsValid(false);
        } 
        else if(!haveDigit()) {
            setMessage('make sure it contains atleast one digit (0-9)')
            setIsValid(false); 
        } 
        else {
            setMessage('Your password is perfect. :)'); 
            setIsValid(true); 
        }
    }

    useEffect(() => {
        checkValidity(enteredPassword); 
    }, [enteredPassword])

    
    const changeHandler = (event) => {
        let val = event.target.value; 
        setEnteredPassword(val); 
        setIsFirstTime(false); 
    }

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

    // password show or hide
    const checkBoxHandler = (event) => {
        if(passwordInp.current.type === 'password') {
            passwordInp.current.type = 'text'; 
        }else {
            passwordInp.current.type = 'password'; 
        }
    }

    const focusHandler = (event) => {
        setIsFocused(true); 
    }
    const blurHandler = (event) => {
        setIsFocused(false);
        setIsFirstTime(false);  
    }

    let Pdesc = `make sure password is atleast 6 characters long including a lowercase, a uppercase, a digit and a special character (@ # - &) `
    return (

        <div className={classes.container}>
            <label className={classes.inpLabel} htmlFor="">Set a password</label>
            <input className={classes.inpPass} ref = {passwordInp} placeholder="Enter password" type="password" value={enteredPassword} onBlur={blurHandler} onFocus={focusHandler} onChange={changeHandler}/>
            {preparePopover()}
            <p className={classes.passDesc}>{Pdesc}</p>
            
            <div className={classes.showPassDiv}>
                <input className={classes.checkbox}  name='pass-checkbox' type="checkbox" onChange={checkBoxHandler}/>
                <label htmlFor="pass-checkbox">Show password</label> 
            </div>
        </div>


    )

}

export default PasswordComponent;



// notes :- 
/*
    This component have two input elements :---- 1. password
                                           |____ 2. confirm password 
*/ 