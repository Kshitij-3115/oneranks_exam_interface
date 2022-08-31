import classes from './Tagbar.module.css';

import Tagline from '../../General/Tagline';

import {useState, useRef} from 'react'; 
import {useSelector, useDispatch} from 'react-redux'
import Tagdot from '../../General/Tagdot';
import { examSimActions } from '../../../store';

const Tagbar = props => {

    const [active, setActive] = useState(false); 

    const content = useRef();
    
    const data = useSelector((state)=> {
        return {
            tags : state.queBank[state.activeQuestion].tags, 
        }
    }); 

    const dispatch = useDispatch(); 

    

    const clickHandler = (event) => {
        active ? setActive(false) : setActive(true); 
        
        if(content.current.style.maxHeight) {
            content.current.style.maxHeight = null; 
        } else {
            content.current.style.maxHeight = content.current.scrollHeight + "px"; 
        }
        
    }

    const saveTagHandler = (tag) => {
        dispatch(examSimActions.updateTags({tag : tag}));  
    }
    return (
        <div className={classes.container}>
            <div className={classes.tagsAdded}> 
                {data.tags.map((element)=> {
                    return (<Tagdot demo={true} key={element} type={element}/>)
                })}   
            </div>
            <div className={classes.tagline}>
                <button className={`${classes.collapsible} ${active ? classes.active : ''}`} onClick={clickHandler} onAc>Add tags</button>
                <div className={classes.content} ref={content}>
                    <Tagline onClickHandler={saveTagHandler} tags={data.tags}/> 
                </div>
            </div>
        </div>
    )

}

export default Tagbar; 