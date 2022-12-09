import { inventoryAxios as http } from "../http-common";

class CategoryDataService {
    // DONE
    getAll() {
        return http.get("/inventory/category/");
    }

    // DONE
    create(data) {
        return http.post("/inventory/categories/", data);
    }
}

export default new CategoryDataService;