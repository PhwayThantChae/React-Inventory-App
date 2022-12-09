import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";


const ProductQuantityForm = (props) => {

    // Validation schema
    const validationSchema = Yup.object().shape({
        quantity: Yup.number().required("Quantity is required").test(
            'Is positive?', 
            'ERROR: The number must not less than than 0.', 
            (value) => value >= 0)
   });

    
    return (
        <div className="form-wrapper">
            <h3>{props.title}</h3>
            <hr></hr>
            <Formik {...props} validationSchema={validationSchema} >
                <Form>
                    <FormGroup>
                        <label htmlFor="quantity">Product Quantity</label>
                        <Field name="quantity" type="text" className="form-control" />
                        <ErrorMessage name="quantity"    className="d-block invalid-feedback"
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

export default ProductQuantityForm;