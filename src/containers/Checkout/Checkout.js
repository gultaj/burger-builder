import React, { Component, Fragment } from 'react';
import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from 'containers/ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace('checkout/contact-data');
  };
  render() {
    return (
      <div>
        {this.props.ingredients ? (
          <Fragment>
            <CheckoutSummary
              ingredients={this.props.ingredients}
              checkoutCancelled={this.checkoutCancelledHandler}
              checkoutContinued={this.checkoutContinuedHandler}
            />
            <Route
              path={this.props.match.path + '/contact-data'}
              render={props => <ContactData {...props} />}
            />
          </Fragment>
        ) : (
          <Redirect to="/" />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.burger.ingredients,
  price: state.burger.totalPrice
});

export default connect(mapStateToProps)(Checkout);
