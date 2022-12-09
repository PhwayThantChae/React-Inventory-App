import { inventoryAxios as http } from "../http-common";

class ProductDataService {
    // Done
    getAll() {
        return http.get("/inventory/products/");
    }

    // Done
    get(id) {
        return http.get(`/inventory/products/${id}/`);
    }

    // Done
    create(data) {
        return http.post(`/inventory/products/`, data);
    }

    // Done
    update(id, data) {
        return http.put(`/inventory/products/${id}/`, data);
    }


}

export default new ProductDataService;