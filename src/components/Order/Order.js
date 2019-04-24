import React from 'react';
import classes from './Order.module.css';

const Order = props => {
  const ingredientsStr = Object.keys(props.ingredients)
    .filter(key => props.ingredients[key] > 0)
    .map(key => (
      <span key={key} className={classes.Ingredient}>
        {key} ({props.ingredients[key]})
      </span>
    ));
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsStr}</p>
      <p>
        Price: <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default Order;
