
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import ProductTableRow from "./ProductTableRow";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:4000/inventoy/:id/products")
        .then(({data}) => {
            setProducts(data);
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
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      );
}

export default ProductList;