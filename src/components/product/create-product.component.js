// Import Modules
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import ProductForm from "./ProductForm";
import ProductDataService from "../../services/product.service";


const CreateProduct = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: '',
        price: '',
        quantity: '',
        categoryId: '',
        description: '',
        inventoryId: ''
    });


    // On Submit Handler
    const onSubmit = productObject => {
        console.log("product object");
        console.log(productObject);
        ProductDataService.create(productObject).then(res => {
            console.log(res);
            if(res.status >= 200) {
                alert('Product was created successfully.'); 
                navigate('/product-list');
            } else {
                Promise.reject();
            }
        }).catch(err => alert("Something went wrong."));
    }

    return(
        <ProductForm initialValues={formValues} formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Create Product
        </ProductForm>
    )
}

export default CreateProduct;