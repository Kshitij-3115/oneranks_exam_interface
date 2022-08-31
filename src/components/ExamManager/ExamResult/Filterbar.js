
import classes from './Filterbar.module.css';
import { FaChevronDown } from 'react-icons/fa';

import { useState } from 'react';

const Filterbar = props => {

    const [selSubjects, setSelSubjects] = useState([]);  // selected subjects for filter
    const [selLevels, setSelLevels] = useState([]);        // selected levels for filter
    const [selStanderd, setSelStanderd] = useState([]);    // selected standerd for filter
    const [arrangeBy, setArrangeBy] = useState('none');    // arrange/sort option selected

    // options list to render 
    // subjects :- 
    const subjects = ['physics', 'chemistry', 'maths'];
    // levels :- 
    const levels = ['easy', 'medium', 'hard']; 
    // standerd :- 
    const standerd = ['11th', '12th'];   

    // handlers to add/remove from filters 
    const subjectsClickHandler = (event) => {
        // change its state
        let ele = event.target.innerHTML;  
        console.log(ele); 
        if (selSubjects.includes(ele)) {
            // remove it
            let xC = [...selSubjects];
            xC = xC.filter((x)=> {
                return x != ele; 
            });
            setSelSubjects(xC); 
        } else {
            // push it 
            setSelSubjects((pre) => {
                return [...pre, ele]; 
            }); 
        }
    }
    const levelsClickHandler = (event) => {
        let ele = event.target.innerHTML; 
        if (selLevels.includes(ele)) {
            //remove it
            let xC = [...selLevels];
            xC = xC.filter((x)=> {
                return x != ele; 
            })  
            setSelLevels(xC);  
        } else {
            // push it 
            setSelLevels((pre) => {
                return [...pre, ele]; 
            }); 
        }
    }
    const standerdClickHandler = (event) => {
        let ele = event.target.innerHTML; 
        if (selStanderd.includes(ele)) {
            //remove it
            let xC = [...selStanderd];
            xC = xC.filter((x)=> {
                return x != ele; 
            }) 
            setSelStanderd(xC);  
        } else {
            // push it 
            setSelStanderd((pre) => {
                return [...pre, ele]; 
            }); 
        }
    }

    const selectHandler = (event) => {
        setArrangeBy(event.target.value); 
    }

    return (
        <div className={classes.container}>
            <div className={classes.extRow}>
                <span className={classes.filterRowHead}>Filters: </span>
                <div className={classes.inCol}>
                    <span>subjects : </span>
                    <div className={classes.inRow}>
                        {subjects.map((ele)=> {
                            let x = selSubjects.includes(ele) ? classes.sel : classes.unsel; 
                            // console.log(selSubjects);    
                            return (
                                <button key={ele} className={x} onClick={subjectsClickHandler}>{ele}</button>
                            ); 
                        })}
                    </div>
                </div>
                <div className={classes.inCol}>
                    <span>levels :</span>
                    <div className={classes.inRow}>
                        {levels.map((ele)=> {
                            let x = selLevels.includes(ele) ? classes.sel : classes.unsel;    
                            return (
                                <button key={ele} className={x} onClick={levelsClickHandler}>{ele}</button>
                            ); 
                        })}
                    </div>
                </div>
                <div className={classes.inCol}>
                    <span>standerd :</span>
                    <div className={classes.inRow}>
                        {standerd.map((ele)=> {
                            let x = selStanderd.includes(ele) ? classes.sel : classes.unsel;    
                            return (
                                <button key={ele} className={x} onClick={standerdClickHandler}>{ele}</button>
                            ); 
                        })}
                    </div>
                </div>
                {
                    props.isSort &&
                <div className={classes.inCol}>
                    <span>arrange by : </span>
                    <div className={classes.orderBy}>
                        <select name="orderBy" id="orderBy" value={arrangeBy} onChange={selectHandler}>
                            <option value="none">none</option>
                            <option value="strength">strength</option>
                            <option value="weakness">weakness</option>
                        </select>
                    </div>
                </div>
                }
            </div>
            <div>
                
            </div>
        </div>
    );

}

export default Filterbar; 