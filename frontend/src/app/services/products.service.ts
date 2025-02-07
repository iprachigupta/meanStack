import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.apiUrl + '/product');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl + '/product/add', product);
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(environment.apiUrl + '/product/' + id);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(environment.apiUrl + '/product/' + id, product,{ responseType: 'text' as 'json' });
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(environment.apiUrl + '/product/' + id, { responseType: 'text' as 'json' });
  }
}
