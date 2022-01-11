import React, {useState} from 'react';
import classes from './Toolbar.module.css';
import Backdrop2 from './Backdrop2';
import { Link } from 'react-router-dom';
import Logo from "../../../assets/img/Logo.png";


const Toolbar = (props) => {
    const [navOff,setNavOff] = useState(false);
    
    return (
        <div className={classes.Toolbar}>
            <ul>
                <li>
                    <Link 
                        onClick={() => {
                            props.setNavOff(false);
                        }}
                        to="/">
                            BurgerBig
                        </Link>
                </li>
                <li className={classes.Logo}>
                    <Link 
                        onClick={() => {
                            props.setNavOff(false);                        }}
                        to="/">
                            <img src={Logo} alt={Logo}/>
                        </Link>
                </li>
                <li>
                    <ul className={classes.Navbar}>
                        <li>
                            <Link
                                onClick={() => {
                                    props.setNavOff(false);
                                }}
                                className={props.navOff ? null : classes.Active}
                                to="/">Burger Builder</Link>
                        </li>
                        <li 
                            >
                            <Link 
                                onClick={() => {
                                    props.setNavOff(true);
                                }}
                                className={props.navOff ? classes.Active : null}
                                to="/payment">Payment</Link>
                        </li>
                    </ul>
                    <div onClick={() => setNavOff(!navOff)} className={classes.Bars}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Backdrop2 activator={navOff}>
                        <ul 
                            className={navOff ? `${classes.MediaNav} ${classes.Active}` : `${classes.MediaNav}`}>
                            <li className={classes.LogoMedia}>
                                <div 
                                    onClick={() => setNavOff(!navOff)} 
                                    className={navOff ? `${classes.Bars} ${classes.Active}` : `${classes.Bars}`}>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className={classes.LogoMediaNav}>
                                    <Link 
                                        onClick={() => {
                                            props.setNavOff(false);
                                            setNavOff(false);
                                        }}
                                        to="/">
                                            <img src={Logo} alt='Logo' />
                                    </Link>
                                </span>
                            </li>
                            <li className={props.navOff ? null : classes.Active}>
                                    <Link
                                        onClick={() => {
                                            props.setNavOff(false);
                                            setNavOff(false);
                                        }} 
                                        to="/">Burger Builder</Link>
                            </li>
                            <li className={props.navOff ? classes.Active : null}>
                                <Link
                                    onClick={() => {
                                        props.setNavOff(true);
                                        setNavOff(false);
                                    }} 
                                    to="/payment">Payment</Link>
                            </li>
                        </ul>
                    </Backdrop2>
                </li>
            </ul>
        </div>
    )
}

export default Toolbar;
