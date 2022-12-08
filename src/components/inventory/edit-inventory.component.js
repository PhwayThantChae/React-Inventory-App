// Import Modules
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import InventoryForm from "./InventoryForm";
import InventoryDataService from "../../services/inventory.service";

const EditInventory = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        id: '',
        name: ''
    });

    //onSubmit Handler
    const onSubmit = (inventoryObject) => {
        console.log("inventory object");
        console.log(id);
        console.log(inventoryObject);
        InventoryDataService.update(id, inventoryObject).then((res) => {
            console.log(res);
            if (res.status >= 200) {
                alert("Category successfully updated.");
                navigate('/category-list');
            } else {
                Promise.reject();
            }
        }).catch((err) => alert("Something went wrong."));
    };

    // Load data from server and reinitialize product form
    useEffect(() => {
        InventoryDataService.get(id).then(res => {
            if (res.status >= 200) {
                console.log(res.data);
                const {id, name} = res.data;
                setFormValues({id, name});
            } else {
                Promise.reject();
            }

        }).catch(err => alert("Something went wrong."));
    }, []);

    // Return product form
    // return (
    //     <ProductForm initialValues={formValues} onSubmit={onSubmit}
    //     enableReinitialize> Update Product </ProductForm>
    // )

    return(
        <InventoryForm initialValues={formValues} title="Edit Inventory" formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Update Product
        </InventoryForm>
    )
}

export default EditInventory;