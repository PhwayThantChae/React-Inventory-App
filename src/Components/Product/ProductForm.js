import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";


const ProductForm = (props) => {
    // Validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        price: Yup.number()
          .positive("Invalid Price")
          .integer("Invalid Price")
          .required("Required"),
        quantity: Yup.number()
          .positive("Invalid Price")
          .integer("Invalid Price")
          .required("Required"),
        categoryId: Yup.string().required("Required"),
        description: Yup.string().required("Required")
    });
    console.log(props);
    
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label htmlFor="name">Product Name</label>
                        <Field name="name" type="text" className="form-control"/>
                        <ErrorMessage name="name"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="price" className="mt-2">Price</label>
                        <Field name="price" type="number" className="form-control"/>
                        <ErrorMessage name="price"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="quantity" className="mt-2">Quantity</label>
                        <Field name="quantity" type="number" className="form-control"/>
                        <ErrorMessage name="quantity"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="categoryId" className="mt-2">Category</label>
                        <Field as="select" name="categoryId" className="form-control">
                            <option value="1">Red</option>
                            <option value="2">Green</option>
                            <option value="3">Blue</option>
                        </Field>
                        <ErrorMessage name="categoryId"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="description" className="mt-2">Description</label>
                        <Field name="description" type="text" className="form-control"/>
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