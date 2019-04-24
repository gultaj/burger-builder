import React, { Component } from 'react';
import Order from 'components/Order/Order';
import Spinner from 'components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get('orders.json')
      .then(res => {
        const orders = Object.keys(res.data).map(key => ({
          ...res.data[key],
          id: key
        }));
        this.setState({ orders });
      })
      .catch(error => error)
      .then(() => {
        this.setState({ loading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.loading && <Spinner />}
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
