import React, { Component } from 'react';
import config from './formConfig';
import Input from 'components/UI/Input/Input';
import Button from 'components/UI/Button/Button';
import classes from './Auth.module.css';
import checkValidity from 'vlidation/checkValidity';

class Auth extends Component {
  state = {
    form: null,
    invalid: null,
    isInvalidForm: true
  };

  componentWillMount() {
    const form = Object.fromEntries(
      Object.keys(config).map(key => [key, config[key].value])
    );
    const invalid = Object.fromEntries(
      Object.keys(config)
        .filter(key => Boolean(config[key].validation))
        .map(key => [key, null])
    );
    this.setState({ form, invalid });
  }

  handleChange = event => {
    const { name, value } = event.target;
    const invalid = { ...this.state.invalid };
    if (Boolean(config[name].validation)) {
      invalid[name] = checkValidity(value, config[name].validation);
    }
    this.setState({
      orderForm: {
        ...this.state.orderForm,
        [name]: value
      },
      isInvalidForm: Object.keys(invalid).some(
        key => invalid[key] || invalid[key] === null
      ),
      invalid
    });
  };

  render() {
    const inputs = Object.keys(config).map(key => (
      <Input
        element={config[key].element}
        config={config[key].config}
        value={this.state.form[key].value}
        label={config[key].label}
        invalid={this.state.invalid[key]}
        key={key}
        name={key}
        onChange={this.handleChange}
      />
    ));
    return (
      <div className={classes.Auth}>
        <form>
          {inputs}
          <Button type="Success" disabled={this.state.isInvalidForm}>
            LOGIN
          </Button>
        </form>
      </div>
    );
  }
}

export default Auth;
