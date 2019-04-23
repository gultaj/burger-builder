import React from 'react';
import classes from './Order.module.css';

const Order = props => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1), Cheese (2)</p>
    <p>
      Price: <strong>$5.40</strong>
    </p>
  </div>
);

export default Order;
