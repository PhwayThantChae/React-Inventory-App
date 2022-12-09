import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import {useParams} from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from 'react-select';
import { FormGroup, Button } from "react-bootstrap";
import ProductDataService from "../../services/product.service";


const AddProductInventoryForm = (props) => {

    const [options, setOptions] = useState([]);
    const [selectProduct, setProduct] = useState(null);
    const { id } = useParams();
    const ref = useRef(null);

    useEffect(() => {
        async function fetchData() {
            await ProductDataService.getAll().then((res) => {
                const arr = [];
                let result = res.data.products;
                result.map((category) => {
                    return arr.push({value: category.id, label: category.name});
                });
                setOptions(arr);
            });
        }
        fetchData();
    }, []);

    const onProductChange = (selectedOption) => {
        console.log(ref.current.values);
        props.setFormValues({
            productId: selectedOption.value,
            quantity: ref.current.values?.quantity ?? ''
        });
    };

    // Validation schema
    const validationSchema = Yup.object().shape({
        productId: Yup.number(),
        quantity: Yup.number().required("Quantity is required").test(
            'Is positive?', 
            'ERROR: The number must not be less than 0.', 
            (value) => value >= 0
          )
   });

    
    return (
        <div className="form-wrapper">
            <h3>{props.title}</h3>
            <hr></hr>
            <Formik {...props} validationSchema={validationSchema} innerRef={ref}>
                <Form>
                    <FormGroup>
                        <label htmlFor="productId" className="mt-2">Product</label>
                        <Select
                            defaultValue={selectProduct}
                            onChange={onProductChange}
                            options={options}
                        />
                        <ErrorMessage name="categoryId"    className="d-block invalid-feedback"
                        component="span"/>
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="quantity" className="mt-2">Quantity</label>
                        <Field name="quantity" type="number" className="form-control" />
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

export default AddProductInventoryForm;