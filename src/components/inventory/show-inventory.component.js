
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import {useParams} from 'react-router-dom';
import InventoryDataService from "../../services/inventory.service";
import InventoryProductTableRow from "./InventoryProductTableRow";


const InventoryDetails = (props) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        InventoryDataService.getProductsByInventory(id).then(({data}) => {
            console.log(data);
            setProducts(data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const DataTable = () => {
        return products.map((res, i)  => {
            return <InventoryProductTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="container">
          <h3>Inventory Details</h3>
          <hr></hr>

          <div className="d-grid gap-2 d-md-flex justify-content-end mb-3">
            <Button variant="btn btn-primary me-md-2" href={`/inventory/${id}/add-product`}>
                Add Product To Inventory
            </Button>
          </div>
          <div className="clearfix">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Inventory</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
          </div>
        </div>
      );
}

export default InventoryDetails;