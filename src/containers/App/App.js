import React, { Component } from 'react';
import Layout from 'containers/Layout/Layout';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';
import Logout from 'containers/Auth/Logout/Logout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { connect } from 'react-redux';
import * as authActions from 'store/actions/auth';
import asyncComponent from 'hoc/asyncComponent';

const AsyncCheckout = asyncComponent(() =>
  import('containers/Checkout/Checkout')
);
const AsyncOrders = asyncComponent(() => import('containers/Orders/Orders'));
const AsyncAuth = asyncComponent(() => import('containers/Auth/Auth'));

export class App extends Component {
  componentDidMount() {
    this.props.onCheckAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/checkout" component={AsyncCheckout} />
              <Route path="/auth" exec component={AsyncAuth} />
              <Route path="/logout" component={Logout} />
              <PrivateRoute
                path="/orders"
                component={AsyncOrders}
                isAuth={this.props.isAuth}
              />
              <Route path="/" exec component={BurgerBuilder} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = dispatch => ({
  onCheckAuth: () => dispatch(authActions.checkAuthState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
