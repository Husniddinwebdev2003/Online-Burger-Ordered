import React, {useState} from 'react';
import classes from './Modal.module.css';
import Backdrop from '../../Backdrop/Backdrop';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    const [disconnect, setDisconnect] = useState(`${classes.Modal}`)
    let li = null;
    const dataHendler = (data) => {
        let label = Object.keys(data);
        li = label.map((item,index) => {
            return <li key={index}><span>{item}</span>: {props.ignaridents[item]}</li>
        })
    }
    dataHendler(props.ignaridents);

    return (
        <Backdrop activator={props.show}>
            <div className={props.show ? `${classes.Modal} ${classes.Active}` : `${disconnect}`}>
                <h2>Your Order</h2>
                <p>Eat a dlicious burger with the following.</p>
                <ol>
                    {li}
                </ol>
                <p className={classes.Price}>Price: <strong>{props.price}$</strong></p>
                <div className={classes.Df}>
                    <Link onClick={() => {
                            props.setNavOff(true);
                        }} to="/payment">Continue to checkOut?</Link>
                    <p onClick={() => {
                        props.setShow(!props.show);
                        setDisconnect(`${classes.Modal} ${classes.Disconnect}`);
                        setTimeout(() => { 
                                setDisconnect(`${classes.Modal}`);
                        },200);
                        }}>Close</p>
                </div>
            </div>
        </Backdrop>
        
    )
}


export default Modal;
