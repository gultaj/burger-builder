import React, { Component, Fragment } from 'react';
import Burger from 'components/Burger/Burger';

class BurgerBuilder extends Component {
    state ={
        ingredients: {
            salad: 1,
            bacon: 1, 
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Fragment>
                <div><Burger ingredients={this.state.ingredients} /></div>
                <div>Build controls</div>
            </Fragment>
        )       
    }
}

export default BurgerBuilder;