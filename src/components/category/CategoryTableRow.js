
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryDataService from "../../services/category.service";

const CategoryTableRow = (props) => {
    
    const {id, name} = props.obj;

    const deleteCategory = () => {
        CategoryDataService.delete(id).then((res) => {
            console.log(res);
            if (res.status >= 200) {
                alert("Category successfully deleted");
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
            {/* <td> */}
            {/* <Link className="edit-link" to={"/edit-category/" + id}>
              Edit
            </Link> */}
            {/* <Button onClick={deleteCategory} 
              size="sm" variant="danger">
              Delete
            </Button> */}
            {/* </td> */}
        </tr>
    )
}



export default CategoryTableRow;