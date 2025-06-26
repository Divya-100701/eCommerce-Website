import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const SuccessScreen = () => {
  return (
    <Card className="text-center p-4">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>Thank you for choosing Cash on Delivery.</p>
      <Link to="/">
        <Button variant="success">Back to Home</Button>
      </Link>
    </Card>
  );
};

export default SuccessScreen;
