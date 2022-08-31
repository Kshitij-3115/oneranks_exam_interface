import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { Fragment } from "react";
import classes from './AuthPage.module.css';
import Copyright from '../UI/Copyright'
import { useState } from 'react';
// import Modal from "../UI/Modal";
import backImg from '../../assets/back-2400.jpg' 

import Navbar from "../UI/Navbar";
//based on condition render auth page : either with signup-utility OR login-utility


const AuthPage = props => {
    document.body.style = `
        min-height: 100vh;
        margin: 0;
        background: linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%); 
        background-image : url(${backImg}); 
        background-repeat : no-repeat; 
        background-size : cover; 
      `;
      
    // https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80
    // we have two options to render in AuthPage component :- Login, Signup 
    const [authType, setAuthType] = useState('SIGN_UP');


    return (
        <Fragment>
            <Navbar/> 
            {
                authType === 'LOGIN' &&
                <div className={classes['main-div']}>
                    <LoginForm />
                    <div className={classes.extra}>
                        <span>New to cetsky?</span>
                        <span className={classes['create-account']}> <a href="#">create an account</a> </span>
                    </div>
                    <div className={classes.footer}>
                        <Copyright />
                        <span><a href="">terms</a></span>
                        <span><a href="">privacy</a></span>
                    </div>
                </div>
            }
            {
                authType === 'SIGN_UP' &&
                
                    <div className={classes['main-div']}>
                        
                        <SignupForm />
                        
                        
                    </div>
                

            }

        </Fragment>
    )

}

export default AuthPage; 


