
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import CategoryTableRow from "./CategoryTableRow";
import CategoryDataService from "../../services/category.service";


const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        CategoryDataService.getAll().then(({data}) => {
            console.log(data);
            setCategories(data);
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
        <div className="table-wrapper">
            <Button variant="outline-primary mb-3 float-right" href="/create-product">
                Create Category
            </Button>
          <Table striped bordered hover responsive>
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