import React from 'react';

class Key extends React.Component {

  handleClick = () => {
    return this.props.handleClick(this.props.name)
  }

  render() {

    return <button id={this.props.id} className="button" onClick={this.handleClick}>{this.props.name}</button>;
  }
}

export default Key;
