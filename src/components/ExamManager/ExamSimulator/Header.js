import GenInstructions from './Instructions/GenInstructions';
import Modal from '../../UI/Modal';
import Cross from '../../UI/Icons/Cross';

import classes from './Header.module.css'; 

import {useDispatch, useSelector} from 'react-redux'; 

import { examSimActions } from '../../../store';

const Header = props => {
    const dispatch = useDispatch(); 
    const show = useSelector((state) => {
        return state.showInstructions; 
    }); 

    

    const showInstructions = (event) => {
        // show instructions modal on clicking button 
        dispatch(examSimActions.showInstructions({show : true}));  
    }

    const hideInstructions = () => {
        dispatch(examSimActions.showInstructions({show : false})); 
    }

    const header = (<Cross filled={false} className={classes.cross} onClick={hideInstructions} />);; 
    return (
        <div className={classes.container}>
           <span>MHT-CET open test - week 2</span>  
           <button onClick={showInstructions}>General instructions</button>
           {show && <Modal  header={header}><GenInstructions/> </Modal>}
        </div>
    )

}

export default Header; 