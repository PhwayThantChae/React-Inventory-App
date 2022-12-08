import { inventoryAxios as http } from "../http-common";

class ProductDataService {
    getAll() {
        return http.get("/inventory/products/");
    }

    // get(id) {
    //     return http.get(`/product/${id}`);
    // }

    // create(data) {
    //     return http.post("/product", data);
    // }

    // delete(id) {
    //     return http.delete(`/product/${id}`);
    // }

    create(data) {
        return http.post(`/inventory/products/`, data);
    }

    update(id, data) {
        return http.put(`/inventory/products/${id}`, data);
    }

    
    delete(inventoryId, productId) {
        return http.delete(`/inventory/${inventoryId}/products/${productId}`)
    }


}

export default new ProductDataService;