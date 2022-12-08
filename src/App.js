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
// App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>
            <Link to={"/create-product"}
            className="nav-link">
            Inventory App
            </Link>
          </Navbar.Brand>

          <Nav className="justify-content-end">
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
