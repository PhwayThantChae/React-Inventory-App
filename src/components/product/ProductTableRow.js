
import React from "react";
import { Link } from "react-router-dom";

const ProductTableRow = (props) => {
    
    const {id, name, price, quantity, categoryId, description} = props.obj;

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
            </td>
        </tr>
    )
}



export default ProductTableRow;