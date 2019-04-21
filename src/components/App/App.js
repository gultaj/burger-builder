import React from 'react';
import Layout from 'containers/Layout/Layout';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';
import Checkout from 'containers/Checkout/Checkout';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

const App = props => (
  <BrowserRouter>
    <div>
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  </BrowserRouter>
);

export default App;
