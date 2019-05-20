import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  protected url = "http://localhost:8000/producto";

  getProductos() {
    return this.http.get(this.url + "/");
  }

  saveProductos(data) {
    return this.http.post(this.url + "/new", data);
  }

  editProductos(id, data) {
    return this.http.put(this.url + "/" + id + "/edit", data);
  }

  deleteProductos(id) {
    return this.http.delete(this.url + "/" + id);
  }
  showCategoriesByProductos(id) {
    return this.http.get(this.url + "/" + id);
  }
}
