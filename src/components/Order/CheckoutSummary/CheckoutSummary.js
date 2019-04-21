import React from 'react';
import Burger from 'components/Burger/Burger';
import Button from 'components/UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const CheckoutSummary = props => (
  <div className={classes.Checkout}>
    <h1>We hope it tastes well!</h1>
    <div className={classes.Burger}>
      <Burger ingredients={props.ingredients} />
    </div>
    <Button type="Danger">CANCEL</Button>
    <Button type="Success">CONTINUE</Button>
  </div>
);

export default CheckoutSummary;
