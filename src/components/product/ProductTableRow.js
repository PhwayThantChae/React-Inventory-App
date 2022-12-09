
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProductDataService from "../../services/product.service";

const ProductTableRow = (props) => {
    
    const {id, name, price, quantity, categoryId, description} = props.obj;

    // const deleteProduct = () => {
    //     ProductDataService.delete(id).then((res) => {
    //         console.log(res);
    //         if (res.status >= 200) {
    //             alert("Product successfully deleted");
    //             window.location.reload();
    //         } else {
    //             Promise.reject();
    //         }
    //     }).catch((err) => alert("Something went wrong."));
    
        
    // };

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{categoryId}</td>
            <td>{description}</td>
            <td>
            <Link className="edit-link" to={"/edit-product/" + id}>
              Edit
            </Link>
            {/* <Button onClick={deleteProduct} 
              size="sm" variant="danger">
              Delete
            </Button> */}
            </td>
        </tr>
    )
}



export default ProductTableRow;