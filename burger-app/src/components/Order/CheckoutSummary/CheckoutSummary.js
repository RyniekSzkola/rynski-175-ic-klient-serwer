import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div className={classes.CheckoutSummaryBurger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger" 
                clicked={props.checkoutCancelled}>Anuluj</Button>
            <Button 
                btnType="Success" 
                clicked={props.checkoutContinued}>Kontynuuj</Button>
        </div>
    );
};

export default checkoutSummary;