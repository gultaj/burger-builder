import React, { Component } from 'react';
import Button from 'components/UI/Button/Button';
import Spinner from 'components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from 'axios-order';
import Input from 'components/UI/Input/Input';
import config from './formConfig';

class ContactData extends Component {
  state = {
    orderForm: null,
    invalid: null,
    loading: false
  };
  componentWillMount() {
    const form = Object.fromEntries(Object.keys(config).map(key => [key, '']));
    const invalid = Object.fromEntries(
      Object.keys(config).map(key => [key, undefined])
    );
    this.setState({ orderForm: form, invalid });
  }
  checkValidity = (value, rules) => {
    if (!(rules instanceof Object)) return false;
    let isInvalid = [];
    if (rules.hasOwnProperty('required') && rules.required) {
      isInvalid.push(value.trim() === '');
    }
    if (rules.hasOwnProperty('minLength')) {
      isInvalid.push(value.length < rules.minLength);
    }
    if (rules.hasOwnProperty('maxLength')) {
      isInvalid.push(value.length > rules.maxLength);
    }
    return isInvalid.some(rule => rule);
  };
  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: this.state.orderForm
    };
    axios
      .post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      orderForm: {
        ...this.state.orderForm,
        [name]: value
      },
      invalid: {
        ...this.state.invalid,
        [name]: this.checkValidity(value, config[name].validation)
      }
    });
  };
  render() {
    const inputs = Object.keys(config).map(key => (
      <Input
        element={config[key].element}
        config={config[key].config}
        value={this.state.orderForm[key]}
        label={config[key].label}
        invalid={this.state.invalid[key]}
        key={key}
        name={key}
        onChange={this.handleChange}
      />
    ));
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.orderHandler}>
            {inputs}
            <Button type="Success">ORDER</Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;
