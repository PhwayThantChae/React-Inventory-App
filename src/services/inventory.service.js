import { inventoryAxios as http } from "../http-common";

class InventoryDataService {
    // DONE
    getAll() {
        return http.get("/inventory/");
    }

    // DONE
    create(data) {
        return http.post("/inventory/", data);
    }
    
    get(id) {
        return http.get(`/inventory/${id}`);
    }

    delete(id) {
        return http.delete(`/inventory/${id}`);
    }

    getProductsByInventory(id) {
        return http.get(`/inventory/${id}/products/`);
    }

    addProductsToInventory(inventoryId, data) {
        return http.post(`/inventory/${inventoryId}/products/`, data);
    }

    updateProductQuantityInInventory(id, productId, data) {
        return http.put(`/inventory/${id}/products/${productId}/`, data);
    }
    
    // deleteProductByInventory
}

export default new InventoryDataService;