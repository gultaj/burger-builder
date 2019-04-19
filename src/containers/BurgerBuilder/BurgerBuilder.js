import React, { Component, Fragment } from 'react';
import Burger from 'components/Burger/Burger';
import BuildControls from 'components/BuildControls/BuildControls';
import Modal from 'components/UI/Modal/Modal';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import Spinner from 'components/UI/Spinner/Spinner';
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler';
import axios from 'axios-order';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.8
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    isPurchasing: false,
    loading: false
  };
  componentDidMount() {
    axios.get('/ingredients.json').then(res => {
      this.setState({ ingredients: res.data });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.ingredients !== prevState.ingredients) {
      this.updatePurchaseState();
    }
  }
  updatePurchaseState = () => {
    const sum = Object.keys(this.state.ingredients).reduce(
      (sum, key) => sum + this.state.ingredients[key],
      0
    );
    this.setState({ purchasable: sum > 0 });
  };
  addIngredientHandler = type => {
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type] + 1
      },
      totalPrice: this.state.totalPrice + INGREDIENT_PRICES[type]
    });
  };
  removeIngredientHandler = type => {
    if (this.state.ingredients[type] === 0) return;
    this.setState({
      ingredients: {
        ...this.state.ingredients,
        [type]: this.state.ingredients[type] - 1
      },
      totalPrice: this.state.totalPrice - INGREDIENT_PRICES[type]
    });
  };
  purchaseHandler = () => {
    this.setState({ isPurchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ isPurchasing: false });
  };
  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
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
      .then(res => {})
      .catch(error => {})
      .then(() => {
        this.setState({ loading: false, isPurchasing: false });
      });
  };
  render() {
    const disabledControls = { ...this.state.ingredients };
    for (let type in disabledControls) {
      disabledControls[type] = disabledControls[type] <= 0;
    }
    return (
      <Fragment>
        <Modal
          show={this.state.isPurchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              cancel={this.purchaseCancelHandler}
              continue={this.purchaseContinueHandler}
            />
          )}
        </Modal>
        {this.state.ingredients ? (
          <Fragment>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              totalPrice={this.state.totalPrice}
              add={this.addIngredientHandler}
              remove={this.removeIngredientHandler}
              purchasable={this.state.purchasable}
              disabledControls={disabledControls}
              purchasing={this.purchaseHandler}
            />
          </Fragment>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
