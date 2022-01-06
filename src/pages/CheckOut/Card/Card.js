import React from 'react';
import classes from "../CheckOut.module.css";
import { Link } from 'react-router-dom';

export default function Card(props) {
    return (
        <div className={classes.Card}>
            <div className={classes.Title}>
                <span>{props.title}</span> 
                <Link to="/notfound">Pay</Link>
            </div>
            <div className={classes.CardItem}>
                <label for='MasterCard'>
                    <img  src={props.url} alt="<MasterCard />"/>
                </label>
                <div className={classes.CardCode}>
                    <input maxLength={4} placeholder="* * * *" type='password' />
                    <input maxLength={4} placeholder="* * * *" type='password' />
                    <input maxLength={4} placeholder="* * * *" type='password' />
                    <input maxLength={4} placeholder="* * * *" type='password' />
                </div>
            </div>
        </div>
    )
}
