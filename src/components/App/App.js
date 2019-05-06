import React from 'react';
import Layout from 'containers/Layout/Layout';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'containers/Checkout/Checkout';
import Orders from 'containers/Orders/Orders';
import Auth from 'containers/Auth/Auth';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = props => (
  <BrowserRouter>
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/auth" component={Auth} />
          <Route path="/orders" component={Orders} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  </BrowserRouter>
);

export default App;
