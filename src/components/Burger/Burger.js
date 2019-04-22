import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = props => {
  let ingredients =
    props.ingredients &&
    Object.keys(props.ingredients)
      .map(key =>
        [...Array(props.ingredients[key])].map((_, i) => (
          <BurgerIngredient type={key} key={key + i} />
        ))
      )
      .reduce((prev, cur) => prev.concat(cur), []);
  console.log(ingredients);
  if (ingredients && ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
