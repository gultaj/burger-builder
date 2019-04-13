import React, { Component, Fragment } from 'react';
import Burger from 'components/Burger/Burger';
import BuildControls from 'components/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.8
};

class BurgerBuilder extends Component {
    state ={
        ingredients: {
            salad: 1,
            bacon: 1, 
            cheese: 2,
            meat: 2
        },
        price: 4
    }
    addIngredientHandler = (type) => {
        this.setState(() => ({
            ingredients: {...this.state.ingredients, [type]: this.state.ingredients[type]+1},
            price: this.state.price + INGREDIENT_PRICES[type]
        }));
    }
    removeIngredientHandler = (type) => {
        if (this.state.ingredients[type] === 0) return;
        this.setState(() => ({
            ingredients: {...this.state.ingredients, [type]: this.state.ingredients[type]-1},
            price: this.state.price - INGREDIENT_PRICES[type]
        }));
    }
    render() {
        const disabledControls = {...this.state.ingredients};
        for (let type in disabledControls) {
            disabledControls[type] = disabledControls[type] <= 0;
        }
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler} 
                    disabledControls={disabledControls} />
            </Fragment>
        )       
    }
}

export default BurgerBuilder;