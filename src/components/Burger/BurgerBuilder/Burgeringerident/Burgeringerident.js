import React from 'react';
import classes from "../BurgerBuilder.module.css";

const Burgeringerident = (props) => {
    let burgerIngnerident = null;
    switch(props.type) {
        case("salad"):
            burgerIngnerident = <li className={classes.Salad}></li>
            break;
        case("meat"):
            burgerIngnerident = <li className={classes.Meat}></li>
            break;
        case("bacon"):
            burgerIngnerident = <li className={classes.Bacon}></li>
            break;
        case("cheese"):
            burgerIngnerident = <li className={classes.Chease}></li>
            break;
        default: 
            burgerIngnerident = null;
            break;
    }

    return (
        burgerIngnerident
    )
}

export default Burgeringerident;
