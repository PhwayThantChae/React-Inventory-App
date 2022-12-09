// Import Modules
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import ProductQuantityForm from "./ProductQuantityForm";
import InventoryDataService from "../../services/inventory.service";
import AddProductInventoryForm from "./AddProductInventoryForm";

const AddProductInventory = (props) => {
    const { id, productId, quantity } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        productId: '',
        quantity: ''
    });

    //onSubmit Handler
    const onSubmit = (obj) => {
        console.log("object");
        console.log(obj);
        console.log(id);
        console.log(productId);
        InventoryDataService.addProductsToInventory(id, obj).then((res) => {
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
        <AddProductInventoryForm initialValues={formValues} title="Add Product To Inventory" formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Update
        </AddProductInventoryForm>
    )
}

export default AddProductInventory;