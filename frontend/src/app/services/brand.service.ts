import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../types/brand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(private http: HttpClient) {}

  getBrands(): Observable<Brand[]> {
    return this.http.get<Brand[]>(environment.apiUrl+ '/brand');
  }

  addBrand(name: string): Observable<Brand> {
    return this.http.post<Brand>(environment.apiUrl+ '/brand/add', {
      name: name,
    });
  }

  getBrandById(id: string): Observable<Brand> {
    return this.http.get<Brand>(environment.apiUrl+ '/brand/' + id);
  }

  updateBrand(id: string, name: string): Observable<Brand> {
    return this.http.put<Brand>(environment.apiUrl+ '/brand/' + id, {
      name: name,
    });
  }

  deleteBrand(id: string): Observable<Brand> {
    return this.http.delete<Brand>(environment.apiUrl+ '/brand/' + id);
  }
}
