import React, {useState } from 'react';
import classes from './BurgerOrder.module.css';
import Modal from './Modal/Modal';

export default function BurgerOrder(props) {
    const [show,setShow] = useState(false);
    const modalShowHendler = () => {
        setShow(!show)
    }
    const disabled = props.emptyBurger === null ? false : true; 

    return (
        <div className={classes.BurgerOrder}>
            <button 
                disabled={disabled} 
                className={disabled === null ? `${classes.Active}` : null} 
                onClick={modalShowHendler}>ORDER NOW</button>
            <Modal navOff={props.navOff} setNavOff={props.setNavOff} price={props.price} setShow={setShow} show={show} ignaridents={props.ignarident} />
        </div>
    )
}
