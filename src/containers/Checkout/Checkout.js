import React, { Component } from 'react';
import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from 'containers/ContactData/ContactData';
import { connect } from 'react-redux';
// import { parse } from 'query-string';

class Checkout extends Component {
  // state = {
  //   ingredients: null,
  //   price: 0
  // };
  // componentWillMount() {
  //   const query = parse(this.props.location.search);
  //   const ingredients = {};
  //   for (let key in query) {
  //     if (key !== 'price') {
  //       ingredients[key] = query[key];
  //     }
  //   }
  //   this.setState({ ingredients, price: Number(query.price).toFixed(2) });
  // }
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('checkout/contact-data');
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          render={props => <ContactData {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice
});

export default connect(mapStateToProps)(Checkout);
