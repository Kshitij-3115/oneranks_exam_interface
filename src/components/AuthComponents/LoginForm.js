import classes from './LoginForm.module.css';
import { Fragment } from 'react';
import logoimg from '../../assets/cetskyLogo.jpg';
import Input from '../UI/Input.js';

const LoginForm = props => {
    return (
        <Fragment>
            {/* login form will come here */}
            <div className={classes['main-div']}>
                <div className={classes.header}>
                    <img src={logoimg} alt="cetsky-logo" />
                    <div>Sign in to cetsky</div>
                </div>

                <form className={classes.form}>
                    <Input className={classes.inp} label="Email address or Username" input={{
                        type : 'email', 
                        id : 'email'
                    }} />
                    <Input className={classes.inp} label="Password" input={{
                        type : 'password',
                        id : 'password', 
                        span : 'Forgot password ?'
                    }} />
                    <button type='submit'>Sign in</button>
                </form>

            </div>
        </Fragment>
    )
}


export default LoginForm; 