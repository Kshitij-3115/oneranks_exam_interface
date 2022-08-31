import classes from './CameraDiv.module.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PenDiv = props => {

    
    
    return (
        <button className={`${classes.roundCamera} ${props.class}`} id={props.id} title='update profile pic' onClick={props.onClickHandler}>
            <FontAwesomeIcon icon="pen" color='rgb(255, 255, 255)'/>
        </button>
    )

}

export default PenDiv; 