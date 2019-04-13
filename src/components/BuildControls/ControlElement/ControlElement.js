import React from 'react';
import classes from './ControlElement.module.css';


const ControlElement = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} 
            onClick={props.remove}
            disabled={props.disabledControl}>Less</button>
        <button className={classes.More} onClick={props.add}>More</button>
    </div>
);

export default ControlElement;