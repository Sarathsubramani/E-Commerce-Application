import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import ProductCard from "./ProductCard";

class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "All"
    };
  }

  handleCategoryChange = (e) => {
    this.setState({ category: e.target.value });
  };

  getCategories() {
    const { products } = this.props;
    const categories = products.map((p) => p.category);
    return ["All", ...new Set(categories)];
  }

  getFilteredProducts() {
    const { products } = this.props;
    const { category } = this.state;
    if (category === "All") return products;
    return products.filter((p) => p.category === category);
  }

  render() {
    const { onAddToCart } = this.props;
    const filtered = this.getFilteredProducts();

    return (
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <h2 className="mb-0">Our Products</h2>
          <Form.Select
            style={{ maxWidth: "220px" }}
            value={this.state.category}
            onChange={this.handleCategoryChange}
          >
            {this.getCategories().map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </div>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {filtered.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </Col>
          ))}
        </Row>
        {filtered.length === 0 && (
          <p className="text-muted text-center mt-4">
            No products found in this category.
          </p>
        )}
      </Container>
    );
  }
}

export default ProductGrid;
