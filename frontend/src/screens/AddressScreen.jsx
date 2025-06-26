// src/screens/AddressScreen.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { saveShippingAddress } from "../slices/cartSlice"; 

const AddressScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    
    dispatch(saveShippingAddress({ address, city, postalCode, country }));

    
    navigate("/cod");
  };

  return (
    <Card className="p-3">
      <h2>Shipping Address</h2>
      <Form onSubmit={submitHandler}>
        {/* form fields */}
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control value={city} onChange={(e) => setCity(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} required />
        </Form.Group>

        <Button type="submit">Continue to COD</Button>
      </Form>
    </Card>
  );
};

export default AddressScreen;
