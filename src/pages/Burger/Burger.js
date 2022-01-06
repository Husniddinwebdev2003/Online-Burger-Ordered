import React, { Component } from 'react';
import Aux from "../../hoc/Aux1";
import BurgerBuilder from "../../components/Burger/BurgerBuilder/BurgerBuilder";
import BuildControl from '../../components/Burger/BuildControl/BuildControl';
import classesBuilder from "../../components/Burger/BurgerBuilder/BurgerBuilder.module.css";
import Toolbar from '../../components/Burger/Toolbar/Toolbar';
import { Switch, Route } from 'react-router-dom';
import CheckOut from '../CheckOut/CheckOut';
import Error from '../404Error/404Error';


const Price = {
    salad: 2.3,
    bacon: 1.2,
    cheese: 2.1,
    meat: 3.2
}
export default class Burger extends Component {
    state = {
        ignaridents: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 0,
        disabled: false,
        navOff: false
    }

    addedIgnaridentsHandler = (type) => {
        const oldIgnaridents = {
            ...this.state.ignaridents
        }
        
        oldIgnaridents[type] = this.state.ignaridents[type] + 1;
        this.setState({ignaridents: oldIgnaridents});
        this.setState({totalPrice: this.state.totalPrice + Price[type]});

        const info = Object.values(oldIgnaridents).reduce((el,i) => el+i);
        if(info > 6) {
            oldIgnaridents[type] = this.state.ignaridents[type];
            this.setState({ignaridents: oldIgnaridents});
            this.setState({totalPrice: this.state.totalPrice + 0});
        } 
    }
    
    removedIgnaridentsHandler = (type) => {
        const oldIgnaridents = {
            ...this.state.ignaridents
        }
        if(oldIgnaridents[type] > 0) {
            oldIgnaridents[type] = this.state.ignaridents[type] - 1;
            this.setState({ignaridents: oldIgnaridents});
            this.setState({totalPrice: this.state.totalPrice - Price[type]});
        }
    }

    render() {
        let emptyBurger = Object.keys(this.state.ignaridents).map((item) => {
            return this.state.ignaridents[item]
        }).reduce((el,item) => {
            return el + item;
        }, 0);
        if(emptyBurger === 0) {
            emptyBurger = <li className={classesBuilder.emptyBurger}>Please add something !!!</li>
        } else {
            emptyBurger = null;
        }
        const disabled = {
            ...this.state.ignaridents
        }
        for(let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        const disabledMoreBtn = Object.values(this.state.ignaridents).reduce((el,i) => el+i);
        return (
            <Aux>
                <nav>
                    <Toolbar 
                        navOff={this.state.navOff}
                        setNavOff={(e) => this.setState({navOff: e})} />
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <main>
                            <BurgerBuilder  
                                ignaridents={this.state.ignaridents}
                                emptyBurger={emptyBurger}
                                />
                            <BuildControl 
                                navOff={this.state.navOff}
                                setNavOff={() => this.setState({navOff: !this.state.navOff})}
                                Price={this.state.totalPrice.toFixed(2)}
                                ignarident={this.state.ignaridents} 
                                addedIgnaridentsHandler={this.addedIgnaridentsHandler} 
                                removedIgnaridentsHandler={this.removedIgnaridentsHandler}
                                emptyBurger={emptyBurger}
                                disabled={disabled}
                                disabledMoreBtn={disabledMoreBtn}
                                />
                        </main>
                    </Route>
                    <Route path="/payment">
                        <CheckOut 
                            val={this.state.ignaridents} 
                            price={this.state.totalPrice.toFixed(2)}
                            navOff={this.state.navOff}
                            setNavOff={(e) => this.setState({navOff: e})}/>
                    </Route>
                    <Route path="/notfound">
                        <Error />
                    </Route>
                </Switch>
            </Aux>
        )
    }
}
