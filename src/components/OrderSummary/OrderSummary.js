import React from 'react';
import Button from 'components/UI/Button/Button';

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
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue order?</p>
      <Button type="Danger" clicked={props.cancel}>
        CANCEL
      </Button>
      <Button type="Success" clicked={props.continue}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;
