import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {
        label: 'Sałata', type: 'salad',
    },     {
        label: 'Bekon', type: 'bacon',
    },     {
        label: 'Ser', type: 'cheese',
    },     {
        label: 'Mięso', type: 'meat',
    },
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Obecna cena: <strong>{props.currentPrice.toFixed(2)}zł</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>
            ))}
            <button 
                className={classes.OrderButton} 
                disabled={!props.purchaseable}
                onClick={props.ordered}>ZŁÓŻ ZAMÓWIENIE</button>
        </div>
    );
};

export default buildControls;