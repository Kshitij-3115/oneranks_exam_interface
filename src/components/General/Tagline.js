import Tagdot from './Tagdot';
import classes from './Tagline.module.css'; 

const Tagline = props => {

    //props : tags - added tags 
    let tags = props.tags; 

    return (
        <div className={classes.container}>
            <Tagdot type={'red'} added={tags.includes('red')} demo={false} onClickHandler={props.onClickHandler}/>
            <Tagdot type={'orange'} added={tags.includes('orange')} demo={false} onClickHandler={props.onClickHandler}/>
            <Tagdot type={'green'} added={tags.includes('green')} demo={false} onClickHandler={props.onClickHandler}/>
            <Tagdot type={'blue'} added={tags.includes('blue')} demo={false} onClickHandler={props.onClickHandler}/> 
            <Tagdot type={'magenta'} added={tags.includes('magenta')} demo={false} onClickHandler={props.onClickHandler}/>
            <Tagdot type={'indigo'} added={tags.includes('indigo')} demo={false} onClickHandler={props.onClickHandler}/>
            <Tagdot type={'cyan'} added={tags.includes('cyan')} demo={false} onClickHandler={props.onClickHandler}/>
        </div>
    )
}

export default Tagline; 