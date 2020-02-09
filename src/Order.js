import React from "react";
import RestaurantButton from "./RestaurantButton";

class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const orderType = this.props.orderType;
    const orders = this.props.orders;
    return (
      <li>
        {orderType}: {orders}{" "}
        <RestaurantButton addOrder={this.props.addOrder} />
      </li>
    );
  }
}
export default Order;
