import React from 'react';
import classes from '../Backdrop/Backdrop.module.css';
import classesTolbar from './Toolbar.module.css';

const Backdrop = (props) => {
    return (
        <div 
            className={props.activator ? `${classesTolbar.Backdrop} ${classes.Backdrop} ${classes.Active}` : null}>
            {props.children}
        </div>
    )
}


export default Backdrop;
