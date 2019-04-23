import React, { Component } from 'react';
import Button from 'components/UI/Button/Button';
import Spinner from 'components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from 'axios-order';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  };
  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Oleg Timoshenko',
        address: {
          street: 'Teststreet 1',
          zipCode: '23130',
          country: 'Belarus'
        },
        email: 'test@tut.by'
      },
      deliveryMethod: 'fast'
    };
    axios
      .post('/orders.json', order)
      .then(res => {
        this.props.history.push('/');
      })
      .catch(error => {})
      .then(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact data</h4>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form>
            <input
              className={classes.Input}
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              className={classes.Input}
              type="email"
              name="email"
              placeholder="Your email"
            />
            <input
              className={classes.Input}
              type="text"
              name="street"
              placeholder="Street"
            />
            <input
              className={classes.Input}
              type="text"
              name="postalCode"
              placeholder="Postal code"
            />
            <Button type="Success" clicked={this.orderHandler}>
              ORDER
            </Button>
          </form>
        )}
      </div>
    );
  }
}

export default ContactData;
