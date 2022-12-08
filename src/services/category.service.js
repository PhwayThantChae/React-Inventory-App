import { inventoryAxios as http } from "../http-common";

class CategoryDataService {
    getAll() {
        return http.get("/inventory/category/");
    }

    create(data) {
        return http.post("/inventory/categories/", data);
    }
}

export default new CategoryDataService;