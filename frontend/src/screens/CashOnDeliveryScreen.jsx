import React from "react";
import { useSelector, } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';


const CashOnDeliveryScreen = () => {
  const { cartItems, shippingAddress } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2);

  const placeOrderHandler = () => {
    // Simulate saving order (you can add backend call here later)
    console.log("Order placed:", { cartItems, shippingAddress, totalPrice });

    navigate("/success");
    dispatch(clearCart());
  };

  return (
    <Card className="p-3">
      <h2>Cash on Delivery</h2>

      <ListGroup className="mb-3">
        <ListGroup.Item>
          <strong>Shipping Address:</strong><br />
          {shippingAddress.address}, {shippingAddress.city},{" "}
          {shippingAddress.postalCode}, {shippingAddress.country}
        </ListGroup.Item>

        <ListGroup.Item>
          <strong>Items:</strong>
          {cartItems.map((item) => (
            <div key={item._id}>
              {item.name} x {item.qty} = ${item.price * item.qty}
            </div>
          ))}
        </ListGroup.Item>

        <ListGroup.Item>
          <strong>Total: ${totalPrice}</strong>
        </ListGroup.Item>
      </ListGroup>

      <Button onClick={placeOrderHandler}>Place Order (COD)</Button>
    </Card>
  );
};

export default CashOnDeliveryScreen;
