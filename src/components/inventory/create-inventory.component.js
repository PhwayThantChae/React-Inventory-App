// Import Modules
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import InventoryForm from "./InventoryForm";
import InventoryDataService from "../../services/inventory.service";


const CreateInventory = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        id: '',
        name: ''
    });


    // On Submit Handler
    const onSubmit = inventoryObject => {
        console.log("inventory object");
        console.log(inventoryObject);
        InventoryDataService.create(inventoryObject).then(res => {
            console.log(res);
            if(res.status >= 200) {
                alert('Inventory was created successfully.'); 
                navigate('/inventory-list');
            } else {
                Promise.reject();
            }
        }).catch(err => alert("Something went wrong."));
    }

    return(
        <InventoryForm initialValues={formValues} title="Create Inventory" formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Create Inventory
        </InventoryForm>
    )
}

export default CreateInventory;