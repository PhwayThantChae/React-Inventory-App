// Import Modules
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import ProductForm from "./ProductForm";
import ProductDataService from "../../services/product.service";

const EditProduct = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: '',
        price: '',
        quantity: '',
        categoryId: '',
        description: '',
        inventoryId: ''
    });

    //onSubmit Handler
    const onSubmit = (productObject) => {
        console.log("product object");
        console.log(productObject);
        console.log(productObject.quantity);
        // axios.put("http://localhost:4000/inventoy/:id/products/update" +
        // props.match.params.id, productObject
        // )
        ProductDataService.update(id, productObject).then((res) => {
            if (res.status >= 200) {
                alert("Product successfully updated.");
                navigate('/product-list');
            } else {
                Promise.reject();
            }
        }).catch((err) => alert("Something went wrong."));
    };

    // Load data from server and reinitialize product form
    useEffect(() => {
        ProductDataService.get(id).then(res => {
            console.log(res);
            if (res.status >= 200) {
                console.log(res.data);
                const {name, price, quantity, categoryId, description, inventoryId} = res.data;
                setFormValues({
                    name: name,
                    price: price,
                    quantity: 0,
                    categoryId: categoryId,
                    description: description
                });
            } else {
                Promise.reject();
            }

        }).catch(err => console.log(err));
    }, []);


    return(
        <ProductForm initialValues={formValues} title="Edit Product" formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Update Product
        </ProductForm>
    )
}

export default EditProduct;