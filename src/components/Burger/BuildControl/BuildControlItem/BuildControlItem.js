import React from 'react';
import classes from "../BuildControl.module.css";

export default function BuildControlItem(props) {
    const infoDisabled = props.disabledMoreBtn > 5;
    return (
        <>
            <li>
                <span>{props.ignarident}</span>
                <button disabled={props.disabled[props.ignarident]} onClick={() => props.removedIgnaridentsHandler(props.ignarident)} className={classes.Less}>Less</button>
                <button disabled={infoDisabled}  onClick={() => props.addedIgnaridentsHandler(props.ignarident)}className={classes.More}>More</button>
            </li>
        </>
    )
}
