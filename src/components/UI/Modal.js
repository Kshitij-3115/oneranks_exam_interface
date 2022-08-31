import { Fragment } from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'


// import for confetti
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

// use confetti when you recieve such order from props - it will be helpfull for greet modals to display greet messages. 

const Backdrop = props => {

    const { width, height } = useWindowSize();
    return <div className={classes.backdrop}>
        { props.showConfetti && <Confetti width={width} height={height} numberOfPieces={500} wind={0} gravity={0.2}/> }
        </div>
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.header}>{props.header}</div>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}

const overlays = document.getElementById('overlays');

const Modal = props => {

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop showConfetti={props.showConfetti}/>, overlays)}
            {ReactDOM.createPortal(<ModalOverlay header={props.header} children={props.children} />, overlays)}
        </Fragment>
    )

}

export default Modal; 