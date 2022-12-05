
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import ProductTableRow from "./ProductTableRow";
import ProductDataService from "../../services/product.service";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductDataService.getAll().then(({data}) => {
            console.log(data);
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