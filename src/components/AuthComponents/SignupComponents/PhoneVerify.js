import classes from './PhoneVerify.module.css';
import Cross from '../../UI/Icons/Cross';
import Modal from '../../UI/Modal';
import ValidateFields from './ValidateFields';

import { useState } from 'react';
import gif from '../../../assets/output-onlinegiftools.gif'


const PhoneVerify = props => {

    const [action, setAction] = useState({
        code: '01',
        label: ''
    })
    const [timer, setTimer] = useState(10);
    const [isOver, setIsOver] = useState(true);
    
    const timerManager = () => {
        let y; 
        setIsOver(false); 
        let x = setInterval(() => {
            console.log(timer); 
            if (y < 2) {
                setIsOver(true);
                clearInterval(x); 
            } else {
                setTimer((pre) => { y = pre;return pre - 1 });
            }
        },1000); 
    }


    const closeHandler = () => {
        props.onCloseClick();  
    }

    const sendOTPHandler = (event) => {
        setTimer(60); 
        setAction({ code: '02', label: 'Enter recieved verification code' });
        timerManager();
    }


    const prepareContent = () => {
        let y;
        if (action.code === "01") {
            y = (<button className={classes['send-otp']} onClick={sendOTPHandler}>Send verification code</button>);
        }
        if (action.code === "02") {
            y = (<ValidateFields className={classes['enter-otp']} />);
        }
        return y;
    }

    const header = (<Cross filled={false} className={classes.cross} onClick={closeHandler} />);
    const x = (<p style={{letterSpacing:'0.5px',fontWeight:'400', color:"rgb(0, 124, 146)" }}>resend after <b style={{ color: 'red', textDecoration: 'underline' }}>{timer}</b> seconds</p>);
    return (
        <Modal header={header}>
            <h3 className={classes.head}>Phone Verification process</h3>
            <div className={classes.label}>
                {action.label}
            </div>
            <div className={classes.content}>
                {prepareContent()}
            </div>
            {
                <div className={classes.resend}>
                    {action.code === '02' && !isOver ? x : (action.code === '02' ? <button className={classes.resendbtn} onClick={sendOTPHandler}>Resend code</button>: '')} 
                </div>
            }
            <img src={gif} alt="gif" width='50%' height='auto'/>
        </Modal>
        //https://exotel.com/wp-content/uploads/2020/02/EXOTEL_nOTP_ANIMATION_SS_v03.gif
        //https://cdn.dribbble.com/users/3821672/screenshots/7172846/media/bdcf195a8ceaf94cd2e55ee274095c91.gif
    )
}

export default PhoneVerify; 