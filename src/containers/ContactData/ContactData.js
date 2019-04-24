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
    loading: false
  };
  componentWillMount() {
    const form = Object.fromEntries(Object.keys(config).map(key => [key, '']));
    this.setState({ orderForm: form });
  }
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
  handleChange = event => {
    this.setState({
      orderForm: {
        [event.target.name]: event.target.value
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
          <form>
            {inputs}
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
