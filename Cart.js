import React from "react";
import { Container, Table, Button, InputGroup, Form, Row, Col, Card, Alert } from "react-bootstrap";

class Cart extends React.Component {
  render() {
    const { cartItems, onRemoveItem, onUpdateQuantity, onContinueShopping } = this.props;

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    if (cartItems.length === 0) {
      return (
        <Container className="py-5 text-center">
          <h2>Your Cart</h2>
          <Alert variant="light" className="border mt-4">
            Your cart is empty.
          </Alert>
          <Button variant="primary" onClick={onContinueShopping}>
            Continue Shopping
          </Button>
        </Container>
      );
    }

    return (
      <Container className="py-4">
        <h2 className="mb-4">Your Cart</h2>
        <Row>
          <Col lg={8}>
            <Table responsive bordered hover align="middle">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th style={{ width: "140px" }}>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>
                      <InputGroup size="sm">
                        <Button
                          variant="outline-secondary"
                          onClick={() =>
                            onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                        >
                          -
                        </Button>
                        <Form.Control
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="text-center"
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </InputGroup>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="secondary" onClick={onContinueShopping}>
              Continue Shopping
            </Button>
          </Col>
          <Col lg={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>Order Summary</Card.Title>
                <div className="d-flex justify-content-between mt-3">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between text-muted">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold fs-5">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button variant="success" className="w-100 mt-3">
                  Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
