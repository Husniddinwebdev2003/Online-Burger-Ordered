import React from 'react';
import classes from "./BuildControl.module.css";
import BuildControlItem from './BuildControlItem/BuildControlItem';
import BurgerOrder from '../Order/BurgerOrder';

const BuildControl = (props) => {
    const BuildControlItem1 = Object.keys(props.ignarident).map((item,index) => {
        return <BuildControlItem 
            disabledMoreBtn={props.disabledMoreBtn}
            disabled={props.disabled}
            key={index}
            addedIgnaridentsHandler={props.addedIgnaridentsHandler} 
            removedIgnaridentsHandler={props.removedIgnaridentsHandler} 
            ignarident={item}/>
    })
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Price}><span>Current Price: </span><strong>{1*props.Price}$</strong></div>
            <ul>
                {BuildControlItem1}
            </ul>
            <BurgerOrder navOff={props.navOff} setNavOff={props.setNavOff}  price={1*props.Price} emptyBurger={props.emptyBurger} ignarident={props.ignarident}/>
        </div>
    )
}

export default BuildControl;
