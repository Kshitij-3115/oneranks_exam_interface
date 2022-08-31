import classes from './QueOptions'; 
import Option from './Option'; 

import {useState} from 'react'; 
import { useSelector } from 'react-redux';

const QueOptions = props => {

    let selected = useSelector((state) => {
        return state.selected; 
    }); 
    

    //console.log(selected);

    

    // const updateSelected = (checkBox,opt) => {
    //     // checkBox is ref coming from its child component
    //     switch (opt) {
    //         case 'A':
    //             if (selected===0) {
    //                 setSelected(-1);  
    //                 checkBox.current.checked = false; 
    //             } else {
    //                 setSelected(0);
    //                 checkBox.current.checked = true; 
    //             } 
    //             break;
    //         case 'B':
    //             if (selected===1) {
    //                 setSelected(-1); 
    //                 checkBox.current.checked = false; 
    //             } else {
    //                 setSelected(1);
    //                 checkBox.current.checked = true; 
    //             } 
    //             break;
    //         case 'C':
    //             if (selected===2) {
    //                 setSelected(-1); 
    //                 checkBox.current.checked = false; 
    //             } else {
    //                 setSelected(2);
    //                 checkBox.current.checked = true; 
    //             } 
    //             break;
    //         case 'D':
    //             if (selected===3) {
    //                 setSelected(-1);
    //                 checkBox.current.checked = false;  
    //             } else {
    //                 setSelected(3);
    //                 checkBox.current.checked = true; 
    //             }
    //     }
        

    // }; 

    
    
    // props : queOpt 
    
    return ( 
        <div className={classes.container}>
            <Option opt='A' sel={selected === 0}  index={0} optC={props.queOpt[0]} /> 
            <Option opt='B' sel={selected === 1}  index={1} optC={props.queOpt[1]} /> 
            <Option opt='C' sel={selected === 2}  index={2} optC={props.queOpt[2]} /> 
            <Option opt='D' sel={selected === 3}  index={3} optC={props.queOpt[3]} /> 
        </div>
    )
}

export default QueOptions; 