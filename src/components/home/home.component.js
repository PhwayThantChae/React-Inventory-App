
import React, { useState, useEffect } from "react";
import CategoryList from "../category/category-list.component";
import InventoryList from "../inventory/inventory-list.component";
import ProductList from "../product/product-list.component";


const Home = () => {

    return (
        <div>
            <div>
                <InventoryList/>
            </div>
            <div className="mt-5">
                <ProductList title="Central Repository For Products" />
            </div>
            <div className="mt-5">
                <CategoryList/>
            </div>
        </div>
      );
}

export default Home;