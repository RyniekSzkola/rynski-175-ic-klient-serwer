import React from 'react';
import classes from './Order.module.css';

const transformIngredientName = (ingredient) => {
    if(ingredient === 'salad') return "Sałata"
    else if (ingredient === 'cheese') return "Ser"
    else if (ingredient === 'meat') return "Mięso"
    else if (ingredient === 'bacon') return "Bekon"
}

const order = (props) => {
    const ingredients = [];

    for(let ingredientName in props.ingredients) {
        ingredients.push(
            {
                name: transformIngredientName(ingredientName), amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px solid #ccc',
            padding: '5px'
        }} key={ig.name}>{ig.name} - {ig.amount} </span>;
    });

    return (
        <div className={classes.Order}>
            <p>Składniki: {ingredientOutput}</p>
            <p>Cena: <strong>{Number.parseFloat(props.totalPrice).toFixed(2)}zł</strong></p>
            <p>Data zamówienia: <strong>{new Date(props.orderDate).toUTCString()}</strong></p>
            <p>
                Imię: <strong style={{paddingRight: '40px'}}>{props.customer.name}</strong> 
                Ulica: <strong style={{paddingRight: '40px'}}>{props.customer.address.street}</strong> 
                Kod pocztowy: <strong style={{paddingRight: '40px'}}>{props.customer.address.zipCode}</strong>
            </p>

        </div>
    );
};

export default order;