// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import other React Component
import CreateProduct from "./components/product/create-product.component";
import EditProduct from "./components/product/edit-product.component";
import ProductList from "./components/product/product-list.component";

import CreateCategory from "./components/category/create-category.component";
import EditCategory from "./components/category/edit-category.component";
import CategoryList from "./components/category/category-list.component";

import CreateInventory from "./components/inventory/create-inventory.component";
import EditInventory from "./components/inventory/edit-inventory.component";
import InventoryList from "./components/inventory/inventory-list.component";
import InventoryDetails from "./components/inventory/show-inventory.component";
import EditProductQuantity from "./components/inventory/edit-product-quantity.component";

// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>
            <Link to={"/inventory-list"}
            className="nav-link">
            Inventory Management System
            </Link>
          </Navbar.Brand>

          <Nav className="justify-content-end">
            <Nav>
              <Link to={"/inventory-list"}
                className="nav-link">
                Inventories
              </Link>
            </Nav>
            <Nav>
              <Link to={"/product-list"}
                className="nav-link">
                Products
              </Link>
            </Nav>
            <Nav>
              <Link to={"/category-list"}
                className="nav-link">
                Categories
              </Link>
            </Nav>
          </Nav>
          </Container>
        </Navbar>
        </header>

        <Container>
        <Row>
          <Col md={12}>
          <div className="wrapper">
            <Routes>
              <Route exact path="/" element={<ProductList/>} />
              <Route path="/create-product" element={<CreateProduct/>} />
              <Route path="/edit-product/:id" element={<EditProduct/>} />
              <Route path="/product-list" element={<ProductList/>} />
              <Route path="/create-category" element={<CreateCategory/>} />
              <Route path="/edit-category/:id" element={<EditCategory/>} />
              <Route path="/category-list" element={<CategoryList/>} />
              <Route path="/inventory-list" element={<InventoryList/>} />
              <Route path="/create-inventory" element={<CreateInventory/>} />
              <Route path="/edit-inventory/:id" element={<EditInventory/>} />
              <Route path="/show-inventory/:id" element={<InventoryDetails/>} />
              <Route path="/inventory/:id/edit-product-quantity/:productId" element={<EditProductQuantity/>} />
            </Routes>
          </div>
          </Col>
        </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
