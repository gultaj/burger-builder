import React from 'react';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(type => (
    <li key={type}>
      <span style={{ textTransform: 'capitalize' }}>{type}: </span>
      {props.ingredients[type]}
    </li>
  ));
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue order?</p>
    </React.Fragment>
  );
};

export default OrderSummary;
