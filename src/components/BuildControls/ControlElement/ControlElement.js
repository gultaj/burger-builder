import React from 'react';
import classes from './ControlElement.module.css';

const ControlElement = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={[classes.ControlButton, classes.Less].join(' ')}
      onClick={props.remove}
      disabled={props.disabledControl}
    >
      Less
    </button>
    <button
      className={[classes.ControlButton, classes.More].join(' ')}
      onClick={props.add}
    >
      More
    </button>
  </div>
);

export default ControlElement;
