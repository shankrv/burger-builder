import React from 'react';

import classes from './Burger.css';

import Ingredients from './Ingredients/Ingredients';

const burger = props => {
  const ingredList = Object.keys(props.ingredients).map(key => {
    return (<Ingredients type={key} />);
  });

  return (
    <div className={classes.Burger}>
      <Ingredients type='bread-top' />
      {ingredList}
      <Ingredients type='bread-bottom' />
    </div>
  );
};

export default burger;
