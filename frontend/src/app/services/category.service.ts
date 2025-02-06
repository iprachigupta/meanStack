import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getCategories() : Observable<any>{
    return this.http.get<any>("http://localhost:3000/category");
  }

  addCategory(name:string): Observable<any>{
    return this.http.post<any>("http://localhost:3000/category/add",{
      name: name,
    })
  }

  getCategoryById(id: string) : Observable<any>{
    return this.http.get<any>("http://localhost:3000/category/"+id);
  }

  updateCategory(id: string, name: string):Observable<any>{
    return this.http.put<any>("http://localhost:3000/category/"+id,{
      name: name,
    });
  }

  deleteCategory(id: string):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/category/"+id);
  }
}
