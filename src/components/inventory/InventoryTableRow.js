
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InventoryDataService from "../../services/inventory.service";

const InventoryTableRow = (props) => {
    
    const {id, name} = props.obj;

    const deleteInventory = () => {
        InventoryDataService.delete(id).then((res) => {
            console.log(res);
            if (res.status >= 200) {
                alert("Inventory successfully deleted");
                window.location.reload();
            } else {
                Promise.reject();
            }
        }).catch((err) => alert("Something went wrong."));
    
        
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
            <Link className="edit-link" to={"/show-inventory/" + id}>
              Details
            </Link> 
            <Button onClick={deleteInventory} 
              size="sm" variant="danger">
              Delete
            </Button>
            </td>
        </tr>
    )
}



export default InventoryTableRow;