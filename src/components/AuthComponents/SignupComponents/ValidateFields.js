import classes from './ValidateFields.module.css';
import Modal from '../../UI/Modal';
import { useEffect, useRef, useState } from 'react';
const ValidateFields = props => {
    const [filled, setFilled] = useState({
        id1 : false, id2 : false, id3 : false, id4 : false, id5 : false
    });
    const [values, setValues] = useState({
        id1 : '', id2 : '', id3 : '', id4 : '', id5 : ''
    }); 
    const [error,setError] = useState(false); 
    const [flag, setFlag] = useState(false); 
    const id1 = useRef(); 
    const id2 = useRef();
    const id3 = useRef(); 
    const id4 = useRef(); 
    const id5 = useRef();
    const form = useRef(); 
    
    let otp = 12345; 


    const clearForm = () => {
        setValues(() => {
            return {
                id1 : '', id2 : '', id3 : '', id4 : '', id5 : ''
            }
        }); 
        setFilled(() => {
            return {
                id1 : false, id2 : false, id3 : false, id4 : false, id5 : false
            }
        })
        setFlag(false);
         
         
        id2.current.disabled = true 
        id3.current.disabled = true 
        id4.current.disabled = true 
        id5.current.disabled = true 
        id1.current.focus(); 
        console.log('form cleared'); 
    }
    const verifyOTP = () => {
        let enteredCode = values.id1 + values.id2 + values.id3 + values.id4 + values.id5; 
        // verify otp/code here : make request to server/api 
        // we are using demo here
        if(enteredCode == 12345) {
            setError(false); 
            alert('mobile number verified succesfully!');  
        } else {
            setError(true); 
        }
    }

    useEffect(()=> {
        clearForm(); 
    },[error]); 

    useEffect(()=> {
        console.log(flag); 
        if(flag) {
            verifyOTP(); 
        }
    },[values]);  

    const inputHandler = (event) => {
        let id = event.target.id; 
        let val = event.target.value;
        let num = val.charAt(val.length-1);    
        switch (id) {
            case 'id1': 
                setValues((pre)=>{return {...pre, id1 : num}}); 
                setFilled((pre)=>{return {...pre, id1 : true}});
                id2.current.disabled = false;
                id2.current.focus(); 
                 
                break;
            case 'id2':
                setValues((pre)=>{return {...pre, id2 : num}});
                setFilled((pre)=>{return {...pre, id2 : true}});
                id3.current.disabled = false;
                id3.current.focus();
                
                break;
            case 'id3':
                setValues((pre)=>{return {...pre, id3 : num}});
                setFilled((pre)=>{return {...pre, id3 : true}});
                id4.current.disabled = false;
                id4.current.focus(); 
                
                break;
            case 'id4':
                setValues((pre)=>{return {...pre, id4 : num}});
                setFilled((pre)=>{return {...pre, id4 : true}});
                id5.current.disabled = false;
                id5.current.focus(); 
                break;
            case 'id5':
                setValues((pre)=>{return {...pre, id5 : num}});
                setFilled((pre)=>{return {...pre, id5 : true}}); 
                id5.current.blur();
                setFlag(true); 
                setError(false); 
                break;

            default:
                break;
        }
    }

    return (
        
            <div className={props.className}>
                <form ref={form} className={classes.container}>
                <input id='id1' ref={id1} className={filled.id1 ? classes.filled:`${classes.normal} ${error && classes.error}` } onChange={inputHandler} value={values.id1} type="number" min={0} max={9} autoFocus/>
                <input id='id2' ref={id2} className={filled.id2 ? classes.filled:`${classes.normal} ${error && classes.error}` } onChange={inputHandler} value={values.id2} type="number" min={0} max={9} disabled/>
                <input id='id3' ref={id3} className={filled.id3 ? classes.filled:`${classes.normal} ${error && classes.error}` } onChange={inputHandler} value={values.id3} type="number" min={0} max={9} disabled/>
                <input id='id4' ref={id4} className={filled.id4 ? classes.filled:`${classes.normal} ${error && classes.error}` } onChange={inputHandler} value={values.id4} type="number" min={0} max={9} disabled/>
                <input id='id5' ref={id5} className={filled.id5 ? classes.filled:`${classes.normal} ${error && classes.error}` } onChange={inputHandler} value={values.id5} type="number" min={0} max={9} disabled/>
                </form>
            </div>
        

    )
}

export default ValidateFields; 