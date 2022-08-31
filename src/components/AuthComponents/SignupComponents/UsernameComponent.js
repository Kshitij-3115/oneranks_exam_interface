import classes from './UsernameComponent.module.css';
import classes1 from '../../UI/Popover.module.css'; 

import Danger from '../../UI/Danger'
import Ok from '../../UI/Ok'; 

import { useState } from 'react';
import { useEffect } from 'react';
import Popover from '../../UI/Popover'; 



const UsernameComponent = props => {
    

    const [enteredUsername, setEnteredUsername] = useState('');
    const [isValid, setIsValid] = useState(false);   
    const [message, setMessage] = useState('');   // message to pass popover if invalid input entered. 
    const [isFirstTime, setIsFirstTime] = useState(true);  
    const [isFocused, setIsFocused] = useState(false);  
     

    let str = 'Kshitij';  

    useEffect(() => {
        // validity of enteredUsername will be checked here
        let x = checkValidity();  // this will true or false 
        setIsValid(x);
                
    }, [enteredUsername,message]);

    const checkValidity = () => {
        let x = enteredUsername; 
        if(x ==='') {
            setMessage('User name is requried!'); 
            return false;  
        } 
        if(x.length < 4) {
            setMessage('Username should have atleast 4 characters!'); 
            return false; 
        }
        setMessage(`username ${x} is perfect :)`); 
        return true; 
    }

    const dangerStyle = {
        'marginLeft': '-8%',
        'marginTop': '6px'
    }

    const okStyle = {
        'marginLeft': '-8%',
        'marginTop': '4px'
    }

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

    // input content management - two way binding
    const changeHandler = (event) => {
        event.preventDefault();
        let val = event.target.value;
        setEnteredUsername(val);
        setIsFirstTime(false); 
    }

    const focusHandler = (event) => {
        setIsFocused(true);  
    }
    const focusLostHandler = (event) => {
        setIsFocused(false); 
        setIsFirstTime(false) 
    }

    return (
        <div className={`${classes['username-inp']} ${(!isValid && !isFirstTime) && classes.invalid}`}>
                <label>User name </label>
                <div className={classes.input}><input type="text" placeholder="Enter username" value={enteredUsername} onChange={changeHandler} onFocus={focusHandler} onBlur={focusLostHandler}/> {prepareStatus()} </div>
                {preparePopover()} 
        </div>
    )
}

export default UsernameComponent; 




//points to manage its style :-    
/* 
    Username ---- {empty + focus active}
            |____ {empty + focus active and then goan } 
            |____ {empty + first render }
            |____ { invalid } -- because username not available 
            |____ { invalid } -- because entered pattern is wrong (rule violated) 
    
    1. use 'onFocus' event --> then do nothing 
    2. use 'onFocusOut' event  --- if empty -> then aply invalid class with proper message. 
                               |__ if entered username is invalid (as decided above ) -> then aply invalid class with proper message. 
    3. if it is first render of component --> dont aply (valid or invalid ) class  
*/ 