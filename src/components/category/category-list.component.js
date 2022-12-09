
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import CategoryTableRow from "./CategoryTableRow";
import CategoryDataService from "../../services/category.service";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryDataService.getAll().then(({data}) => {
            console.log(data);
            setCategories(data.categories);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const DataTable = () => {
        return categories.map((res, i)  => {
            return <CategoryTableRow obj={res} key={i} />;
        });
    };

    return (
        <div className="container">
          <h3>Category</h3>
          <hr></hr>
          <div className="d-grid gap-2 d-md-flex justify-content-end mb-3">
            <Button variant="btn btn-primary me-md-2" href="/create-category">
                Create Category
            </Button>
          </div>
          <Table striped bordered hover responsive compact>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </div>
      );
}

export default CategoryList;