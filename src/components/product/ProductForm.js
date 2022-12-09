import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import {useParams} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";
import Select from 'react-select';
import CategoryDataService from "../../services/category.service";


const ProductForm = (props) => {

    const [options, setOptions] = useState([]);
    const [selectCategory, setCategory] = useState(null);
    const { id } = useParams();
    const ref = useRef(null);

    useEffect(() => {
        async function fetchData() {
            await CategoryDataService.getAll().then((res) => {
                const arr = [];
                let result = res.data.categories;
                result.map((category) => {
                    return arr.push({value: category.id, label: category.name});
                });
                setOptions(arr);
            });
        }
        fetchData();
    }, []);


    // Validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Product name is required"),
        price: Yup.number()
          .positive("Invalid Price")
          .integer("Invalid Price")
          .required("Price is required"),
        quantity: Yup.number().test(
            'Is positive?', 
            'ERROR: The number must not be less than 0.', 
            (value) => value >= 0),
        categoryId: Yup.number(),
        inventoryId: Yup.number(),
        description: Yup.string().required("Description is required")
    });


    const onCategoryChange = (selectedOption) => {
        props.setFormValues({
            name: ref.current.values?.name ?? '',
            price: ref.current.values?.price ?? '',
            quantity: ref.current.values?.quantity ?? '',
            categoryId: selectedOption.value,
            description: ref.current.values?.description ?? '',
            inventoryId: ref.current.values?.inventoryId
        });
    };

    
    return (
        <div className="form-wrapper">
            <h3>{props.title}</h3>
            <hr></hr>
            <Formik {...props} validationSchema={validationSchema} innerRef={ref} >
                <Form>
                    <FormGroup>
                        <label htmlFor="name">Product Name</label>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="price" className="mt-2">Price</label>
                        <Field name="price" type="number" className="form-control" />
                        <ErrorMessage name="price"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="quantity" className="mt-2">Add Quantity</label>
                        <Field name="quantity" type="number" className="form-control" />
                        <ErrorMessage name="quantity"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="categoryId" className="mt-2">Category</label>
                        <Select
                            // defaultValue={selectCategory}
                            value={options.find((d) => d.value === props.formValues.categoryId )}
                            onChange={onCategoryChange}
                            options={options}
                        />
                        <ErrorMessage name="categoryId"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="description" className="mt-2">Description</label>
                        <Field name="description" type="text" className="form-control"  />
                        <ErrorMessage name="description"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <Button variant="primary" block="block" type="submit" className="mt-3">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ProductForm;