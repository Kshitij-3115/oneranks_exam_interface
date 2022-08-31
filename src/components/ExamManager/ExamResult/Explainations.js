

import classes from './Explainations.module.css'; 
import Filterbar from './Filterbar';

import {QueFrame} from './Strength'; 

const Explanations = props => {

    // in this component , we render solutions of all questions
    // user can filter the result by choosing approriate filters. 

    // we are reusing 'QueFrame' component. by adding some extra things to it 
    // isExplain prop tell that 
    let x = [1,2,3,4,5,6,6,6,6,6,6,6,6];
    return (
        <div className={classes.container}>
            <Filterbar isSort={false}/> 
            <div className={classes.contentBody}>
                 
                 
                {
                    x.map(()=> {
                        return (<QueFrame status="correct" showExtras={true}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Explanations; 