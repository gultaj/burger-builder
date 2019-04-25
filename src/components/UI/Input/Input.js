import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  const InputElement = props.element;
  let options = null;
  if (props.element === 'select') {
    options = props.config.options.map(option => (
      <option key={option.value} value={option.value}>
        {option.title}
      </option>
    ));
  }
  const inputClasses = [classes.Input];
  if (props.invalid) {
    inputClasses.push(classes.Invalid);
  }
  return (
    <div className={classes.InputGroup}>
      <label className={classes.Label}>
        {props.label && props.label + ':'}
      </label>
      <InputElement
        className={inputClasses.join(' ')}
        {...props.config}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      >
        {options}
      </InputElement>
    </div>
  );
};

export default Input;
