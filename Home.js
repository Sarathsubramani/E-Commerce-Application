import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    const { onShopNow } = this.props;
    return (
      <div className="hero-section text-white text-center d-flex align-items-center">
        <Container>
          <Row>
            <Col>
              <h1 className="display-4 fw-bold">Welcome to ShopEase</h1>
              <p className="lead">
                Quality products, unbeatable prices, delivered to your door.
              </p>
              <Button variant="light" size="lg" onClick={onShopNow}>
                Shop Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
