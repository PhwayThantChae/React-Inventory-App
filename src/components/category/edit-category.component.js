// Import Modules
import React, { useState, useEffect } from "react";
import {useNavigate, useParams} from 'react-router-dom';
import CategoryForm from "./CategoryForm";
import CategoryDataService from "../../services/category.service";

const EditCategory = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        id: '',
        name: ''
    });

    //onSubmit Handler
    const onSubmit = (categoryObject) => {
        console.log("category object");
        console.log(categoryObject);
        CategoryDataService.update(id, categoryObject).then((res) => {
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
        CategoryDataService.get(id).then(res => {
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
        <CategoryForm initialValues={formValues} formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Update Product
        </CategoryForm>
    )
}

export default EditCategory;