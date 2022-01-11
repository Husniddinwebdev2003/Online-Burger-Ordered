import React from 'react';
import classes from "./BurgerBuilder.module.css";
import BurgerIgnerident from "./Burgeringerident/Burgeringerident";

const BurgerBuilder = (props) => {
    let ignarident = Object.keys(props.ignaridents)
        .map((item) => {
            return ([...Array(props.ignaridents[item])]).map((_,i) => {
                return <BurgerIgnerident type={item} key={i} />
            });
        });
        console.log(ignarident);
    return (
        <div className={classes.Box}>
            <ul>
                <li className={classes.BreadTop}>
                    <div className={classes.Sedds1}></div>
                    <div className={classes.Sedds2}></div>
                </li>
                {props.emptyBurger}
                {ignarident}
                <li className={classes.BreadBottom}></li>
            </ul>
        </div>
    )
}

export default BurgerBuilder;
