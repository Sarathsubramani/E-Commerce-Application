import React from "react";
import { Card, Button } from "react-bootstrap";

class ProductCard extends React.Component {
  render() {
    const { product, onAddToCart } = this.props;

    return (
      <Card className="h-100 shadow-sm product-card">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6">{product.name}</Card.Title>
          <Card.Text className="text-muted small flex-grow-1">
            {product.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <span className="fw-bold text-success">
              ${product.price.toFixed(2)}
            </span>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onAddToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default ProductCard;
