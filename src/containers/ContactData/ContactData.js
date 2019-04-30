import React, { Component } from 'react';
import Button from 'components/UI/Button/Button';
import Spinner from 'components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from 'axios-order';
import Input from 'components/UI/Input/Input';
import config from './formConfig';
import { connect } from 'react-redux';

class ContactData extends Component {
  state = {
    orderForm: null,
    invalid: null,
    loading: false,
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
    this.setState({ orderForm: form, invalid: invalid });
  }
  checkValidity = (value, rules) => {
    if (!(rules instanceof Object)) return;
    let isInvalid = [];
    if (Boolean(rules.required)) {
      isInvalid.push(value.trim() === '');
    }
    if (Boolean(rules.minLength)) {
      isInvalid.push(value.length < rules.minLength);
    }
    if (Boolean(rules.maxLength)) {
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
    const invalid = { ...this.state.invalid };
    if (Boolean(config[name].validation)) {
      invalid[name] = this.checkValidity(value, config[name].validation);
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
            <Button type="Success" disabled={this.state.isInvalidForm}>
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice
});

export default connect(mapStateToProps)(ContactData);
