// Import Modules
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import ProductQuantityForm from "./ProductQuantityForm";
import InventoryDataService from "../../services/inventory.service";

const EditProductQuantity = (props) => {
    const { id, productId } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        quantity: ''
    });

    //onSubmit Handler
    const onSubmit = (obj) => {
        console.log("object");
        console.log(obj);
        console.log(id);
        console.log(productId);
        InventoryDataService.updateProductQuantityInInventory(id, productId, obj).then((res) => {
            console.log(res);
            if (res.status >= 200) {
                alert("Quantity successfully added.");
                navigate(`/show-inventory/${id}`);
            } else {
                Promise.reject();
            }
        }).catch((err) => alert("Something went wrong."));
    };

    return(
        <ProductQuantityForm initialValues={formValues} title="Add Quantity" formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Update
        </ProductQuantityForm>
    )
}

export default EditProductQuantity;