// this component handles top nav
import classes from './Navbar.module.css'; 
import logo from '../../assets/cetsky-text.png'; 

const Navbar = props => {

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <img src={logo} alt="main logo" />
            </div>
            <div className={classes.right}>
                <h3>MHT-CET 2022 Weekly challenge (PCM) : week 2</h3>
            </div>
        </div>
    )
}

export default Navbar; 