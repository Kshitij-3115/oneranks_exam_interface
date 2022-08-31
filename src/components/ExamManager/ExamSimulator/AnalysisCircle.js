import classes from './AnalysisCircle.module.css';

// import Tooltip from '../UI/Tooltip';

const LockFill = props => {

   return (
       <svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15" fill="rgb(255, 133, 133)" className="bi bi-lock-fill" viewBox="0 0 16 16">
           <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
       </svg>
   )
}

const UnlockFill = props => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg"  width="15" height="15" fill="rgb(0, 175, 131)" className="bi bi-unlock-fill" viewBox="0 0 16 16">
           <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
       </svg>
   )
}

const AnalysisCircle = props => {

    // props.subject  : subject 
    let subject = props.subject; 
    //pc done or not ? 
    let done = props.isPCDone; 
    // props.dim : object of arrays which decides dashed offset for these 5 circle strokes 
    let dim = props.dimData; // three dimential array  
    return (
        <div className={classes.container}>
                <svg className={classes.svg} width="140" height="140" viewport="0 0 140 140" version="1.1"
                    xmlns="http://www.w3.org/2000/svg">
                    
                    <circle className={classes.answered} r="60" cx="50%" cy="50%" fill="transparent" 
                       strokeDasharray= {`${dim[0][0]} ${dim[0][1]}`} strokeDashoffset={`0`}></circle>
                  
                    <circle className={classes['not-answered']} r="60" cx="50%" cy="50%" fill="transparent" 
                       strokeDasharray= {`${dim[1][0]} ${dim[1][1]}`} strokeDashoffset={`-${dim[0][0]}`} ></circle>

                    <circle className={classes['marked-for-review']} r="60" cx="50%" cy="50%" fill="transparent" 
                       strokeDasharray= {`${dim[2][0]} ${dim[2][1]}`} strokeDashoffset={`-${dim[0][0] + dim[1][0]}`} ></circle>

                    <circle className={classes['answered-marked']} r="60" cx="50%" cy="50%" fill="transparent" 
                       strokeDasharray= {`${dim[3][0]} ${dim[3][1]}`} strokeDashoffset={`-${dim[0][0] + dim[1][0] + dim[2][0]}`} ></circle>

                    <circle className={classes['not-visited']} r="60" cx="50%" cy="50%" fill="transparent" 
                       strokeDasharray= {`${dim[4][0]} ${dim[4][1]}`} strokeDashoffset={`-${dim[0][0] + dim[1][0] + dim[2][0] + dim[3][0]}`}></circle>
                </svg>
                <div className={classes.name}>
                   <span>{done ? ((subject === 'Physics' || subject === 'Chemistry') ? <LockFill/> : <UnlockFill/>)  : ((subject === 'Physics' || subject === 'Chemistry') ? <UnlockFill/> : <LockFill/>)}</span> 
                  {subject} 
                </div>
            </div>
    ); 
}

export default AnalysisCircle; 