import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductGrid from "./components/ProductGrid";
import Cart from "./components/Cart";
import products from "./data/products";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
      cartItems: []
    };
  }

  handleNavSelect = (page) => {
    this.setState({ activePage: page });
  };

  handleAddToCart = (product) => {
    this.setState((prevState) => {
      const existing = prevState.cartItems.find((item) => item.id === product.id);
      let updatedCart;
      if (existing) {
        updatedCart = prevState.cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...prevState.cartItems, { ...product, quantity: 1 }];
      }
      return { cartItems: updatedCart };
    });
  };

  handleRemoveItem = (productId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.id !== productId)
    }));
  };

  handleUpdateQuantity = (productId, quantity) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    }));
  };

  getCartCount() {
    return this.state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  renderPage() {
    const { activePage, cartItems } = this.state;

    switch (activePage) {
      case "products":
        return (
          <ProductGrid products={products} onAddToCart={this.handleAddToCart} />
        );
      case "cart":
        return (
          <Cart
            cartItems={cartItems}
            onRemoveItem={this.handleRemoveItem}
            onUpdateQuantity={this.handleUpdateQuantity}
            onContinueShopping={() => this.handleNavSelect("products")}
          />
        );
      case "home":
      default:
        return (
          <>
            <Home onShopNow={() => this.handleNavSelect("products")} />
            <ProductGrid
              products={products.slice(0, 4)}
              onAddToCart={this.handleAddToCart}
            />
          </>
        );
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar
          cartCount={this.getCartCount()}
          onNavSelect={this.handleNavSelect}
          activePage={this.state.activePage}
        />
        {this.renderPage()}
        <footer className="bg-dark text-white text-center py-3 mt-4">
          <small>&copy; 2026 ShopEase. All rights reserved.</small>
        </footer>
      </div>
    );
  }
}

export default App;
