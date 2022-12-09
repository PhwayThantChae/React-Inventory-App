
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import ProductTableRow from "./ProductTableRow";
import ProductDataService from "../../services/product.service";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductDataService.getAll().then(({data}) => {
            console.log(data);
            setProducts(data.products);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const DataTable = () => {
        return products.map((res, i)  => {
            return <ProductTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="container">
          <h3>Product</h3>
          <hr></hr>

          <div className="d-grid gap-2 d-md-flex justify-content-end mb-3">
            <Button variant="btn btn-primary me-md-2" href="/create-product">
                Create Product
            </Button>
          </div>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </div>
      );
}

export default ProductList;