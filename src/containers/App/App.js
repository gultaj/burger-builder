import React, { Component } from 'react';
import Layout from 'containers/Layout/Layout';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'containers/Checkout/Checkout';
import Orders from 'containers/Orders/Orders';
import Auth from 'containers/Auth/Auth';
import Logout from 'containers/Auth/Logout/Logout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PrivateRoute from 'components/Routes/PrivateRoute';
import { connect } from 'react-redux';
import * as authActions from 'store/actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.onCheckAuth();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout>
            <Switch>
              <Route path="/checkout" component={Checkout} />
              <Route path="/auth" component={Auth} />
              <Route path="/logout" component={Logout} />
              <PrivateRoute
                path="/orders"
                component={Orders}
                isAuth={this.props.isAuth}
              />
              <Route path="/" component={BurgerBuilder} />
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
