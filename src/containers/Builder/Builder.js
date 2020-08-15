import React, { Component } from 'react';

import Aux from '../../hoc/Auxil';

import Burger from '../../components/Burger/Burger';

class Builder extends Component {
  /*
  constructor(props) { 
    super(props)
    this.state = {}
  }
  */

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Controls</div>
      </Aux>
    );
  }
}

export default Builder;
