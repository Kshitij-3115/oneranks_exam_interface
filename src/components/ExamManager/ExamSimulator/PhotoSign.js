import classes from './PhotoSign.module.css'; 
import examFaceMale from '../../../assets/student1Face.jpeg'; 
import examFaceFemale from '../../../assets/student2Face.jpeg'; 
import sign from '../../../assets/sign.png';  

const PhotoSign = props => { 

    return (
        <div className={classes.container}>
            <img src={examFaceMale} alt="photo" className={classes.photo}/>
            <img src={sign} alt="sign" className={classes.sign}/>
        </div>
    )

}

export default PhotoSign; 