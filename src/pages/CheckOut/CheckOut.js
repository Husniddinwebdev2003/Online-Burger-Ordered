import React from 'react';
import { Link } from 'react-router-dom';
import classes from './CheckOut.module.css';
import MasterCard from "../../assets/img/mastercard.png";
import Visa from "../../assets/img/visa.png";
import Humo from "../../assets/img/humo.jpg";
import Uzcard from "../../assets/img/uzcard.jpg";
import Card1 from './Card/Card';


const CheckOut = (props) => {
    const data = [
        {
            title: "MasterCard",
            url: MasterCard
        },
        {
            title: "Visa",
            url: Visa
        },
        {
            title: "Uzcard",
            url: Uzcard
        },
        {
            title: "Humo",
            url: Humo
        }
    ];

    const submitHendler = (e) => {
        e.preventDefault();
    }

    let li = null;
    const dataHendler = (data) => {
        let label = Object.keys(data);
        li = label.map((item,index) => {
            return <li key={index}><span style={{textTransform: "capitalize"}}>{item}</span>: {props.val[item]}</li>
        })
    }
    dataHendler(props.val);
    let Card = data.map((item,index) => {
        return <Card1 key={index} title={item.title} url={item.url}/>
    })
    return (
        <>
        <div className={classes.Payment}>
            <div className={classes.Content}>
                <h1>Payment</h1>
                <div className={classes.PaymentInfo}>
                    <ol>
                        {li}
                    </ol>
                    <div className={classes.InfoPrice}>
                        <span>Your price: <strong>{props.price}$</strong></span>
                        <Link to='/' onClick={() => props.setNavOff(false)}>Check Out??</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={classes.PaymentCard}>
            <form onSubmit={submitHendler}>
                <div className={classes.Df}>
                    {Card}
                </div>
            </form>
        </div>
        </>
        
    )
}

export default CheckOut;
