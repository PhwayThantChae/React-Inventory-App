import { inventoryAxios as http } from "../http-common";

class ProductDataService {
    getAll() {
        return http.get("/inventory/products/");
    }

    get(id) {
        return http.get(`/inventory/products/${id}/`);
    }

    create(data) {
        return http.post(`/inventory/products/`, data);
    }

    update(id, data) {
        return http.put(`/inventory/products/${id}/`, data);
    }


}

export default new ProductDataService;