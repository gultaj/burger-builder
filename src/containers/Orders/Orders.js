import React, { Component } from 'react';
import Order from 'components/Order/Order';
import Spinner from 'components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as orederActions from 'store/actions/order';

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }
  render() {
    return (
      <div>
        {this.props.loading && <Spinner />}
        {this.props.orders.map(order => (
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

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token
});

const mapDispatchToProps = dispatch => ({
  onFetchOrders: token => dispatch(orederActions.fetchOrders(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
