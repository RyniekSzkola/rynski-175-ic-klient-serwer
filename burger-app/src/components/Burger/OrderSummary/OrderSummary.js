import React from 'react';
import Aux from '../../../hoc/AuHoc';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>Twoje zamówienie</h3>
            <p>Burger z następującymi składnikami:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Łączna cena: <strong>{props.totalPrice}zł</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Anuluj</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Kontynuuj</Button>
        </Aux>
    );
};

export default orderSummary;