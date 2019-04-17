import React, { Component } from 'react';

import './CollapsibleButton.scss';

class CollapsibleButton extends Component {
  constructor(props){
    super(props);

    this.state = {
      condition: false
    }

    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle(){
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {

    const { firstName, lastName, horseFatherName} = this.props

    return (
      <div className="collapsible_wrap">
        <button className="collapsible" onClick={this.clickHandle} > Visa Tränare och hästfadern</button>
        <div className={ this.state.condition ? "collapsible_content show" : "collapsible_content hide" }>
          <p>Tränare: {firstName + ' ' + lastName}</p>
          <p>Hästfadern: {horseFatherName}</p>
        </div>
      </div>
    );

  }

}

export default CollapsibleButton;
