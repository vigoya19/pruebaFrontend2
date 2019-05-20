import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

	protected url = 'http://localhost:8000/categoria';

	saveCategoria(data) {
		return this.http.post(this.url + '/new', data);
	}

	getCategorias() {
		return this.http.get(this.url + '/');
	}

deleteCategoria(id) {
	return this.http.delete(this.url + '/'+id)
}

	 updateCategoria(id,data: any) {
	 	return this.http.put(this.url + '/'+id+'/edit',data);
	 }


}
