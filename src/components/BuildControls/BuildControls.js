import React from 'react';
import ControlElement from './ControlElement/ControlElement';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(el => 
            <ControlElement key={el.type} 
                label={el.label} 
                type={el.type} 
                add={() => props.add(el.type)}
                remove={() => props.remove(el.type)} 
                disabledControl={props.disabledControls[el.type]} />)}
    </div>
);

export default BuildControls;