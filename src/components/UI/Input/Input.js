import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  const Element = props.element;
  let InputElement = (
    <Element
      className={classes.Input}
      {...props.config}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
    />
  );
  if (props.element === 'select') {
    const options = props.config.options.map(option => (
      <option key={option.value} value={option.value}>
        {option.title}
      </option>
    ));
    InputElement = (
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
  }

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
