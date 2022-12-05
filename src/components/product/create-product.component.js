// Import Modules
import React, { useState } from "react";
import ProductForm from "./ProductForm";


const CreateProduct = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        price: '',
        quantity: '',
        categoryId: '',
        description: ''
    });


    // On Submit Handler
    const onSubmit = productObject => {
        console.log("product object");
        console.log("in hrere");
        console.log(productObject);
        // axios.post('http://localhost:4000/inventoy/:id/products/create',
        // productObject).then(res => {
        //     if(res.status === 200) {
        //         alert('Product was created successfully.'); 
        //     } else {
        //         Promise.reject();
        //     }
        // }).catch(err => alert("Something went wrong."));
    }

    return(
        <ProductForm initialValues={formValues} formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Create Product
        </ProductForm>
    )
}

export default CreateProduct;