import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  const Element = props.element;
  let options = null;
  if (props.element === 'select') {
    options = props.config.options.map(option => (
      <option key={option.value} value={option.value}>
        {option.title}
      </option>
    ));
  }
  const InputElement = (
    <Element
      className={classes.Input}
      {...props.config}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    >
      {options}
    </Element>
  );
  return (
    <div className={classes.InputGroup}>
      <label className={classes.Label}>
        {props.label && props.label + ':'}
      </label>
      {InputElement}
    </div>
  );
};

export default Input;
