import classes from './QueContent.module.css';

import Tagbar from './Tagbar';

const QueContent = props => {

    return (
        <div className={classes.container} >
            <Tagbar/> 
            <div className={classes.qcontent} dangerouslySetInnerHTML={{ __html: `${props.queC}` }} ></div>
        </div>
    )
}

export default QueContent; 