// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductForm from "./ProductForm";

const CreateProduct = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        price: 0,
        quantity: 0,
        categoryId: '',
        description: ''
    })

    // On Submit Handler
    const onSubmit = productObject => {
        console.log(productObject);
        axios.post('http://localhost:4000/inventoy/:id/products/create',
        productObject).then(res => {
            if(res.status === 200) {
                alert('Product was created successfully.'); 
            } else {
                Promise.reject();
            }
        }).catch(err => alert("Something went wrong."));
    }

    return(
        <ProductForm initialValues={formValues}
        onSubmit={onSubmit} enableReinitialize>
            Create Product
        </ProductForm>
    )
}

export default CreateProduct;