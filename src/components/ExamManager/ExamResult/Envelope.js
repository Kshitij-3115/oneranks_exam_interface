import classes from './Envelope.module.css'; 

// import modal
import Modal from '../../UI/Modal';
import Cross from '../../UI/Icons/Cross'; 

// import from react
import {useState} from 'react'; 
import {Link} from 'react-router-dom'; 

// import from react icons
import {FaLongArrowAltRight} from 'react-icons/fa'; 

const Envelope = props => {

    const [greetResult, setGreetResult] = useState(false); 

    const showResult = event => {
        setGreetResult(true);  
    }

    const closeGreet = event => {
        setGreetResult(false); 
    }

    
     
     
    return (
        <div className={classes.wrapper}>
            <div className={`${classes.lid} ${classes.one}`}></div>
            <div className={`${classes.lid} ${classes.two}`}></div>
            <div className={classes.envelope}></div>
            <div className={classes.letter}>
                <p>Hi, kshitijkhot31 </p>
                <button className={classes.showResult} onClick={showResult}>Show my result</button>
            </div>
            {greetResult && <GreetResult closeHandler={closeGreet}/> }
            
        </div>
    )
}

const GreetResult = props => {

    const header = (<Cross filled={false} className={classes.cross} onClick={props.closeHandler} />);
    return (
        <Modal header={header} showConfetti={true}>
           <div className={classes.greetMsg}>
                 
                    <p style={{color : 'rgb(168, 1, 168)', fontSize:'21px',fontWeight:'400'}}>Congratulations kshitijkhot31,</p> 
                    <p style={{textIndent : '10%'}}>We are glad to inform you that you scored a total of <span style={{color : 'rgb(0, 175, 146)', fontSize:'22px',fontWeight:'400'}}>154</span> out of <span style={{color : 'rgb(0, 175, 146)', fontSize:'22px',fontWeight:'400'}}>200</span>. You ranked <span style={{color : '#048ce7', fontSize:'22px',fontWeight:'400'}}>211</span> in todays exam with a percentile of <span style={{color : 'rgb(231, 92, 0)', fontSize:'21px',fontWeight:'400'}}>89.233</span>. 
                        Your result seems good. Nothing is at end, Best of luck for next week exam. 
                     </p>
                     <p style={{textIndent : '10%'}}>But, make sure you do proper analysis of this exam using our analysis dashboard and find all loop holes to work upon it. 
                     </p>
                
                <button> <Link to="/exam/result/">Go to Analysis dashboard <FaLongArrowAltRight size="1.1em" style={{marginLeft : '5px', transform:'translateY(2px)'}}/></Link> </button>
           </div>
        </Modal>
    )
}

export default Envelope; 