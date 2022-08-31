import classes from './EnvelopeBox.module.css';

// react loader
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

// import envelope :-    
import Envelope from './Envelope';



import { BsEnvelopeFill, BsFillEmojiSmileFill } from 'react-icons/bs';
import { FaPaperPlane } from 'react-icons/fa';
import { HiDocumentReport } from 'react-icons/hi';
import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from 'react-icons/ai';

import { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import { useTimer } from 'react-timer-hook';

const EnvelopeBox = props => { 

    // take end time of the timer from server
    // make a fetch request for it . 
    // let say you get response as : - say Date : time  ---> 18 March 2022 : 22.00.00 
    // its time when result will publish


    const [submitting, setSubmitting] = useState(false); // response submitting - show message while true
    const [submitted, setSubmitted] = useState(false);
    const [showbar, setShowbar] = useState(false);

    const [envelope, setEnvelope] = useState(true); // if result envelope available then show 

    const [showReviewBox, setShowReviewBox] = useState(!envelope);   // show or not : if response is already given then dont show ! 
    // timer : -

    let expTime = new Date("March 22, 2022 22:00:00");





    // calculate hrs, min, sec, from rem 
    let hrs = 5, min = 23, sec = 34;
    // hrs =  Math.floor((rem/(1000*60*60))%60); 
    // min = Math.floor((rem/(1000*60))%60); 
    // sec = Math.floor((rem/1000)%60); 









    const submitResp = (event) => {
        // submit - response : yes or no 
        let res = event.target.innerText;
        // alert(res); 
        setSubmitting(true);
        // send to server 

        setTimeout(() => {
            setSubmitting(false);
            setSubmitted(true);
            setShowbar(true);
            setTimeout(() => {
                setShowReviewBox(false); // vanish it 
            }, 3000);
        }, 2000);
    }





    return (
        <div className={classes.envelopeBox}>
            <div className={classes.message}>
                {
                    !envelope ? <h4>Your exam responses have been successfully submitted <FaPaperPlane size="1.3em" color="rgb(0, 140, 255, 0.7)" style={{ marginLeft: '5px', transform: 'translateY(3px)' }} /> </h4>
                    : <h4>You have recieved your envelope here, keep cursor over it to open.<FaPaperPlane size="1.3em" color="rgb(0, 140, 255, 0.7)" style={{ marginLeft: '5px', transform: 'translateY(3px)' }} /> </h4>
                }
            </div>

            {showReviewBox &&

                <div className={classes.examExpReview}>
                    {showbar && <div className={classes.bar}></div>}

                    <div className={classes.innerDiv}>
                        {
                            submitting ? <div> <BeatLoader color="rgb(77, 183, 253)" loading={submitting} size={20} /></div> :
                                submitted ? <div className={classes.thankbar}>Thanks for helping us to know your review.</div> :
                                    <div className={classes.resbox}>
                                        <div className={classes.que}>Do you enjoyed exam interface ?</div>
                                        <div className={classes.yes}>
                                            <button onClick={submitResp}> <AiOutlineLike size="1.1em" style={{ marginRight: '5px' }} />  <span>yes</span> </button>
                                        </div>
                                        <div className={classes.no}>
                                            <button onClick={submitResp}> <AiOutlineDislike size="1.1em" style={{ marginRight: '5px' }} />  <span>no</span> </button>
                                        </div>
                                    </div>
                        }
                    </div>

                </div>
            }

            {
                envelope ?
                    <div className={classes.envelopeShow}>
                        <Envelope />
                    </div> :
                    <div className={classes.envelope}>
                        <BsEnvelopeFill size="10em" color="rgb(233, 233, 233)" style={{ transform: 'rotate(0deg)' }} />
                        <div >
                            your result envelope will be shown here.
                        </div>
                    </div>
            }


            {
                !envelope &&
                <div className={classes.countdown}>
                    <h4>
                        We are preparing your result. you will recieve your result envelope after :
                    </h4>
                    <div className={classes.counter}>
                        <Timer expiryTimestamp={expTime} />
                    </div>
                </div>
            }


            <div className={classes.information}>
                {/* what user will be able to do after getting envelope */}

            </div>
        </div>
    );
}

const Timer = ({ expiryTimestamp }) => {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

    return (
        <span>{hours} h : {minutes} m : {seconds} s</span>
    )
}



export default EnvelopeBox; 