import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import Select from 'react-select';
import CategoryDataService from "../../services/category.service";


const ProductForm = (props) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        const getCategoryData = async () => {
          const arr = [];
          await CategoryDataService.getAll().then((res) => {
            let result = res.data;
            result.map((category) => {
              return arr.push({value: category.id, label: category.name});
            });
            setOptions(arr)
          });
        };
        getCategoryData();
    }, []);


    // Validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Product name is required"),
        price: Yup.number()
          .positive("Invalid Price")
          .integer("Invalid Price")
          .required("Price is required"),
        quantity: Yup.number()
          .positive("Invalid Quantity")
          .integer("Invalid Quantity")
          .required("Quantity is required"),
        categoryId: Yup.number(),
        description: Yup.string().required("Description is required")
    });


    const formik = useFormik({
        initialValues: props.formValues,
        validationSchema,
        onSubmit: props.onSubmit
    });

    const onCategoryChange = (selectedOption) => {
        // props.setFormValues({ ...props, ['categoryId']: selectedOption.value });
        props.setFormValues({
            name: formik.values?.name ?? '',
            price: formik.values?.price ?? '',
            quantity: formik.values?.quantity ?? '',
            categoryId: selectedOption.value,
            description: formik.values?.description ?? '',
        });
        // this.setState({ selectedOption }, () =>
        // console.log(`Option selected:`, this.state.selectedOption)
        // );
    };


    
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label htmlFor="name">Product Name</label>
                        <Field name="name" type="text" className="form-control" value={formik.values.name} onChange={formik.handleChange} />
                        <ErrorMessage name="name"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="price" className="mt-2">Price</label>
                        <Field name="price" type="number" className="form-control" value={formik.values.price} onChange={formik.handleChange} />
                        <ErrorMessage name="price"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="quantity" className="mt-2">Quantity</label>
                        <Field name="quantity" type="number" className="form-control" value={formik.values.quantity} onChange={formik.handleChange} />
                        <ErrorMessage name="quantity"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        {/* <label htmlFor="categoryId" className="mt-2">Category</label>
                        <Field name="categoryId" component={SelectField} options={options} />
                        <Field as="select" name="categoryId" className="form-control">
                            <option value="1">Red</option>
                            <option value="2">Green</option>
                            <option value="3">Blue</option>
                        </Field>
                        <ErrorMessage name="categoryId"    className="d-block invalid-feedback"
                        component="span"/> */}
                        <label htmlFor="categoryId" className="mt-2">Category</label>
                        <Select
                            defaultValue={props.categoryId}
                            onChange={onCategoryChange}
                            options={options}
                        />
                        <ErrorMessage name="categoryId"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="description" className="mt-2">Description</label>
                        <Field name="description" type="text" className="form-control" value={formik.values.description} onChange={formik.handleChange}  />
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