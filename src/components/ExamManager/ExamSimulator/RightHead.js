import classes from './RightHead.module.css'; 
import PhotoSign from './PhotoSign';

const LeftA = props => {
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 18 18" >
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"  />
        </svg>
    )
}

const RightHead = props => {

    return (
        <div className={classes.container}>
            <PhotoSign/> 
            <div className={classes.genInfo}> 
                <div className={classes.name, classes.gen}>
                   Name <LeftA/> John Doe
                </div>
                <div className={classes.rollno, classes.gen}>
                    Roll no <LeftA/> SA13012022
                </div>
                <div className={classes['date']}>
                    Date  <LeftA/> <span>12 - 04 - 2022 </span> 
                </div>
                {/* <div className={classes['time-remaining'], classes.gen}>
                    Time left <LeftA/> 2 : 23 : 35 
                </div> */}
                
            </div>
        </div>
    )
}

export default RightHead; 