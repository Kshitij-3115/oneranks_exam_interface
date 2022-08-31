
import './NewComponent.css';
 
import DataForm from './DataForm.js'; 


function NewComponent(props) {

    const onObtainDataHandler = (userData) => {
        console.log(userData);
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <h3>I am from new component.</h3>
            {props.children}   {/* special props children to get child elements from the wrapper component */} 

            <DataForm onObtainData={onObtainDataHandler}/> 
            
        </div>
    )
}

export default NewComponent; 



