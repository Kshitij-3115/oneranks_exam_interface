
import {useState} from 'react' 

const DataForm = (props) => {

    //managing with single state or multistate is totaly fine and upto you!

    //manage with multiple states --> 
    const [enteredName, setEnteredName] = useState('');   //name input state
    const [enteredAge, setEnteredAge] = useState(''); //dob input state
    const [enteredDate, setEnteredDate] = useState(''); //dob input state


    // manage with single state ---> 
    // const [userInput, setUserInputState] = useState({
    //     enteredName : '', 
    //     enteredAge : '',
    //     enteredDate : ''
    // }); 

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value); 

        //if you are managing with a single state object
        // setUserInputState({
        //     ...userInput, 
        //     enteredName : event.target.value 
        // }); 

        console.log(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)

        //if you are managing with a single state object 
        // setUserInputState({
        //     ...userInput, 
        //     enteredAge : event.target.value
        // }); 

        console.log(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)

        // if you are mangaing with single state object 
        // setUserInputState({
        //     ...userInput, 
        //     enteredDate : event.target.value
        // }); 

        console.log(event.target.value); 
    }

    //handle form submit
    const formSubmitHandler = (event) => {

        //prevent default behaviour here
        event.preventDefault(); 
        //console the captured data 
        console.log("form submitted!"); 

        const userBioData = {
            name : enteredName,
            age : Number(enteredAge),
            date : new Date(enteredDate) 
        }

        // console.log(userBioData);

        //sending/using data in another component using event props
        props.onObtainData(userBioData); 


        //clear the form input here
        setEnteredName(''); 
        setEnteredAge(''); 
        setEnteredDate(''); 
        // //after this forms fields are cleared and set to take new inputs. 
    }

    return (
        // return a simple form that take some data. 
        <form onSubmit={formSubmitHandler}>

            <div>
                <label htmlFor="name"></label>
                <input type="text" id="name" onChange={nameChangeHandler} value={enteredName}/>
            </div>

            <div>
                <label htmlFor="age"></label>
                <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
            </div>

            <div>
                <label htmlFor="dob"></label>
                <input type="date" id="dob" onChange={dateChangeHandler} value={enteredDate}/>
            </div>

            <button type="submit">Submit info</button>   

        </form>
    );
}


export default DataForm; 