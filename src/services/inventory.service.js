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
    
    // DONE
    get(id) {
        return http.get(`/inventory/${id}`);
    }

    // DONE
    delete(id) {
        return http.delete(`/inventory/${id}`);
    }

    // DONE
    getProductsByInventory(id) {
        return http.get(`/inventory/${id}/products/`);
    }

    // DONE
    addProductsToInventory(inventoryId, data) {
        return http.post(`/inventory/${inventoryId}/products/`, data);
    }

    // DONE
    updateProductQuantityInInventory(id, productId, data) {
        return http.put(`/inventory/${id}/products/${productId}/`, data);
    }

    deleteProductsFromInventory(inventoryId, productId) {
        return http.delete(`/inventory/${inventoryId}/products/${productId}`)
    }
    
    // deleteProductByInventory
}

export default new InventoryDataService;