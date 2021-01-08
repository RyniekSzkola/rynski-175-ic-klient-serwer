import React from 'react';
import classes  from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import {withRouter} from 'react-router-dom';

const burger = (props) => {
    //const transformedIngredients = Object.keys(props.ingredients)
    //    .map(igKey => {
    //        return [...Array(props.ingredients[igKey])].map((_, i) => {
    //            return <BurgerIngredient key={igKey + i} type={igKey} />
    //        });
    //    })
    //    .reduce((array, el) => {
    //        return array.concat(el)
    //    }, []);
    let transformedIngredients = [];
    for(let key in props.ingredients)
        for(let i=0; i < props.ingredients[key]; i++)
            transformedIngredients.push(<BurgerIngredient key={key + i} type={key} />)
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Dodaj składniki!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);