import {useState} from 'react'; 

import CTest from './CTest'; 

function AnotherComponent(props) {
    
    
    const [title, setTitle] = useState("hello user")
    console.log("this component is evaluated !"); 
    
    const clickHandler = () => {
        setTitle("hello user oops I am updated!");  
        console.log(title);  //this will not be updated immediately. 
    }
    
    const items = props.items; 
   
    return (
        <div>
            <h2>{title}</h2>
            <h4>this is some content from another component.</h4>
            <button onClick={clickHandler}>Click here</button>

            {items.map((item) => <CTest n={item} key={Math.random()}/>)} 
        </div>


    )
}


export default AnotherComponent;