import classes from './SignupForm.module.css';
import UsernameComponent from './SignupComponents/UsernameComponent';
import EmailComponent from './SignupComponents/EmailComponent';
import PhoneComponent from './SignupComponents/PhoneComponent';
import PasswordComponent from './SignupComponents/PasswordComponent';
import { useState } from 'react';
import PhoneVerify from './SignupComponents/PhoneVerify';
import cetskyText from '../../assets/cetsky-text.png'; 




const SignupForm = props => {

    const [show, setShow] = useState(false);
    const [phoneValid, setPhoneValid] = useState(false); 
    const handler = (event) => {
        event.preventDefault();
        setShow(true);
    }

    const validHandler = (isValid) => {
        if(isValid) {
            setPhoneValid(true); 
        } else {
            setPhoneValid(false); 
        }
    }
    const closeClickHandler = () => {
        setShow(false);  
    }
    return (

        <div className={classes.signup}>
            
            <form action="" className={classes.form}>
                <div className={classes.cetsky}>
                <p>Join</p> <img src={cetskyText} alt="cetsky"/>
                </div>
                
                <UsernameComponent />
                <EmailComponent />

                <PhoneComponent onValid={validHandler}/>
                {  phoneValid && 
                <div className={classes.validatebtn}>
                    <button onClick={handler} className={classes.validatebtn}>Verify phone number</button>
                </div>
                }   

                <PasswordComponent />
                <button disabled className={classes.btnSubmit} type='submit'>Create free account</button>

                {show && <PhoneVerify onCloseClick={closeClickHandler}/>}
            </form>
        </div>

    )
}

export default SignupForm; 