import classes from './PhoneComponent.module.css'; 

// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'
import PhoneInput from "react-phone-input-2";
import Popover from '../../UI/Popover';

import "react-phone-input-2/lib/style.css";
import {useEffect, useState} from 'react'; 


const PhoneComponent = props => {

  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [value, setValue] = useState('')  //3399ff
  const [isValid, setIsValid] = useState(false); 
  const [isVerified, setIsVerified] = useState(false);  // set true after completion of otp/code verification      
  const [message,setMessage] = useState('');    // set message accordingly to show in popover 
  const [isFocused, setIsFocused] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [buttonStyle, setButtonStyle] = useState({
    border:`1px solid  rgb(199, 199, 199)`, 
  })
 
  
  
   

  useEffect(() => {
    // call checkvalidity function here
    let x = checkValidity(); // it return true or false 
    if(x) {
      setIsValid(true);
      props.onValid(true);  
    } else {
      setIsValid(false); 
      props.onValid(false); // tell this phone is not valid
    }
     

    // if (value.length == 12 && x) {
    //   setIsVerified(true); 
    //   setMessage(`mobile number ${value.slice(2)} is verified successfully`); 
    // }
    
  },[value]); 

  useEffect(() => {
    //change btnStyle using setButtonStyle
    let y; 
    if(isFocused) {
      if (!isValid && !isFirstTime) {
        y = {
          border : `1px solid red`, 
          boxShadow : `0px 0px 1px 3px rgb(255, 197, 197)` 
        }
      }else {
        y = {
          border: `1px solid rgb(3, 98, 223)`, 
          boxShadow: `0px 0px 1px 3px rgb(168, 208, 253)` //bluish 
        }
      }
    } else {
      if(!isValid && !isFirstTime) {
        y = {
          border : `1px solid red`, 
        }
      } else if(!isValid && isFirstTime) {
        y = {
          border :`1px solid rgb(199, 199, 199)`
        }
      }
    }
    setButtonStyle(y); 
  },[isFocused, isValid,isFirstTime]); 

 
  const checkValidity = () => {
    // all validation happens here, and proper message will  be decided. 
    //setMessage will be used to set proper message
    if (value === '') {
      setMessage('Mobile number is required!'); 
      return false
    } else if(value.includes('1234')) {
      setMessage('Mobile number including 1234 is invalid!'); 
      return false; 
    } else if (value.length < 12) {
      setMessage("Mobile number must be 10 digit long"); 
      return false; 
    }

    return true; 
    
  }

  const changeHandler = (event,data) => {
    setValue(event);
    console.log(data); 
    setIsFirstTime(false); 
  } 

  const focusHandler = (event,data) => {
    setIsFocused(true); 
    // manageInputStyle(true);
     
  }

  const blurHandler = (event,data) => {
    setIsFocused(false); 
    setIsFirstTime(false);
    
    if(!isFirstTime){
      // manageInputStyle(false)
    }
    
  }

  const preparePopover = () => {
    let y; 
    console.log(isValid)
    if(isValid && isVerified) {
      // show popover with message of verification
     return y = (<Popover message={message} isValid={isValid}/>) 
    } 
    
    if(!isValid && !isFirstTime) {
      y = (<Popover message={message} isValid={false}/>)
    } else {
      y = ''
    } 
    return y; 
  }

  const getInpClassName = () => {
    // select proper class
    let y; 
    if (!isValid && !isFirstTime) {
      y = classes.invalid
    } else {
      y = classes.phoneInpInput
    } 
    return y; 
  }

  return (
    <div className={classes['main-div']}>
        <label className={classes['phone-inp-label']}>Phone number</label>
        <div className={classes['phone-inp']}>
        <PhoneInput
        placeholder="Enter phone number"
        // onFocus={focusHandler}
        required={true}
        value={value}
        onChange={changeHandler}
        // onBlur={blurHandler()}
        masks={{in: '..........'}}
        name="phoneNumber"
            type="text"
            country={"in"}
            onlyCountries={['in']}
        // Set your inline styles here
        containerStyle={{
          marginTop:'0%',
          width:'100%'
        }}
        // inputStyle={inputStyle} 
        buttonStyle={buttonStyle}
        buttonClass={classes.btnClass} 
        inputProps={{
          onFocus : focusHandler, 
          onBlur : blurHandler,
          className : getInpClassName() 
        }}  
        />
        
        </div>
        {preparePopover()} 
    </div>
    
  )
}

export default PhoneComponent; 