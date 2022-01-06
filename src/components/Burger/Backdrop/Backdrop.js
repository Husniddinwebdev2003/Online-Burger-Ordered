import React from 'react';
import classes from './Backdrop.module.css'

const Backdrop = (props) => {
    return (
        <div 
            className={props.activator ? `${classes.Backdrop} ${classes.Active}` : null}>
            {props.children}
        </div>
    )
}


export default Backdrop;
