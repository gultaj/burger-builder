import React from 'react';
import ControlElement from './ControlElement/ControlElement';
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current price: <strong>{props.totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map(el => (
      <ControlElement
        key={el.type}
        label={el.label}
        type={el.type}
        add={() => props.add(el.type)}
        remove={() => props.remove(el.type)}
        disabledControl={props.disabledControls[el.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.purchasing}
    >
      {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
    </button>
  </div>
);

export default BuildControls;
