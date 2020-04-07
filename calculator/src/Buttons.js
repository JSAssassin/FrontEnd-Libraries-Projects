import React from 'react';

class Key extends React.Component {

  render() {

    return <button id={this.props.id} className="button" onClick={() => {this.props.handleClick(this.props.name)}}>{this.props.name}</button>;
  }
}

export default Key;
