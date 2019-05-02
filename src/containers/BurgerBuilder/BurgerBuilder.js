import React, { Component, Fragment } from 'react';
import Burger from 'components/Burger/Burger';
import BuildControls from 'components/BuildControls/BuildControls';
import Modal from 'components/UI/Modal/Modal';
import OrderSummary from 'components/OrderSummary/OrderSummary';
import Spinner from 'components/UI/Spinner/Spinner';
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler';
import axios from 'axios-order';
import { connect } from 'react-redux';
import * as burgerActions from 'store/actions/burger';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    isPurchasing: false,
    loading: false
  };
  componentDidMount() {
    // axios
    //   .get('/ingredients.json')
    //   .then(res => {
    //     this.setState({ ingredients: res.data });
    //   })
    //   .catch(error => error);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.ingredients !== prevProps.ingredients) {
      this.updatePurchaseState();
    }
  }
  updatePurchaseState = () => {
    const sum = Object.keys(this.props.ingredients).reduce(
      (sum, key) => sum + this.props.ingredients[key],
      0
    );
    this.setState({ purchasable: sum > 0 });
  };
  purchaseHandler = () => {
    this.setState({ isPurchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ isPurchasing: false });
  };
  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };
  render() {
    const disabledControls = { ...this.props.ingredients };
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
              ingredients={this.props.ingredients}
              price={this.props.totalPrice}
              cancel={this.purchaseCancelHandler}
              continue={this.purchaseContinueHandler}
            />
          )}
        </Modal>
        {this.props.ingredients ? (
          <Fragment>
            <Burger ingredients={this.props.ingredients} />
            <BuildControls
              totalPrice={this.props.totalPrice}
              add={this.props.onAddIngredient}
              remove={this.props.onRemoveIngredient}
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

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  onAddIngredient: ingredient =>
    dispatch(burgerActions.addIngredient(ingredient)),
  onRemoveIngredient: ingredient =>
    dispatch(burgerActions.removeIngredient(ingredient))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
