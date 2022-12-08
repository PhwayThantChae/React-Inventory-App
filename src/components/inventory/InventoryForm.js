import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";


const InventoryForm = (props) => {

    // Validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Inventory name is required")
   });

    
    return (
        <div className="form-wrapper">
            <h3>{props.title}</h3>
            <hr></hr>
            <Formik {...props} validationSchema={validationSchema} >
                <Form>
                    <FormGroup>
                        <label htmlFor="name">Inventory Name</label>
                        <Field name="name" type="text" className="form-control" />
                        <ErrorMessage name="name"    className="d-block invalid-feedback"
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

export default InventoryForm;