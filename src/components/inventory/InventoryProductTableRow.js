
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InventoryDataService from "../../services/inventory.service";

const InventoryProductTableRow = (props) => {
    
    const {pid, cid, iid, categoryName, inventoryName, productName,
    price, quantity, description} = props.obj;

    const deleteProductFromInventory = () => {
        InventoryDataService.deleteProductsFromInventory(iid, pid).then((res) => {
            console.log(res);
            if (res.status >= 200) {
                alert("Product successfully deleted");
                window.location.reload();
            } else {
                Promise.reject();
            }
        }).catch((err) => alert("Something went wrong."));
    
    };

    return (
        <tr>
            <td>{pid}</td>
            <td>{productName}</td>
            <td>{categoryName}</td>
            <td>{inventoryName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{description}</td>
            <td>
            {/* /inventory/:id/edit-product-quantity/:productId */}
            <Link className="edit-link" to={"/inventory/" + iid + "/edit-product-quantity/" + pid}>
              Update Quantity
            </Link>
            <Button onClick={deleteProductFromInventory} 
              size="sm" variant="danger">
              Delete
            </Button>
            </td>
        </tr>
    )
}



export default InventoryProductTableRow;