import React from "react";

class RestaurantButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.addOrder} className="btn btn-primary">
        Add
      </button>
    );
  }
}

export default RestaurantButton;
