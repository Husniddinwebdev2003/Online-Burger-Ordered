import React from 'react';
import classes from "./Error.module.css";
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className={classes.Notfound}>
            <div className={classes.Notfound1}>
                <div className={classes.Notfound2}>
                    <h1>4<span>0</span>4</h1>
                </div>

                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <Link to="/">home page</Link>
            </div>
        </div>
    )
}

export default Error;
