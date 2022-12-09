
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import InventoryTableRow from "./InventoryTableRow";
import InventoryDataService from "../../services/inventory.service";


const InventoryList = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        InventoryDataService.getAll().then(({data}) => {
            console.log(data);
            setInventories(data);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const DataTable = () => {
        return inventories.map((res, i)  => {
            return <InventoryTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="container">
          <h3>Inventory</h3>
          <hr></hr>

          <div className="d-grid gap-2 d-md-flex justify-content-end mb-3">
            <Button variant="btn btn-primary me-md-2" href="/create-inventory">
                Create Inventory
            </Button>
          </div>
          <div className="clearfix">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
          </div>
        </div>
      );
}

export default InventoryList;