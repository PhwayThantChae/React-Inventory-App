// Import Modules
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import CategoryForm from "./CategoryForm";
import CategoryDataService from "../../services/category.service";


const CreateCategory = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: ''
    });


    // On Submit Handler
    const onSubmit = categoryObject => {
        console.log("category object");
        console.log(categoryObject);
        CategoryDataService.create(categoryObject).then(res => {
            console.log(res);
            if(res.status >= 200) {
                alert('Category was created successfully.'); 
                navigate('/category-list');
            } else {
                Promise.reject();
            }
        }).catch(err => alert("Something went wrong."));
    }

    return(
        <CategoryForm initialValues={formValues} formValues={formValues} setFormValues={setFormValues}
        onSubmit={onSubmit} enableReinitialize>
            Create Category
        </CategoryForm>
    )
}

export default CreateCategory;