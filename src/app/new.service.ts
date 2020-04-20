import { Injectable } from '@angular/core';
import { data } from './MockDataNew';
import { New } from './New';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class NewService {
  api = 'https://5e76f6aee3fd85001601f548.mockapi.io/api/v1/new';
  news = data;
  constructor(
    private http: HttpClient
  ) { }

  getNews(): Observable<New[]>{
    return this.http.get<New[]>(this.api);
  }
  getNew(id): Observable<New>{
    return this.http.get<New>(`${this.api}/${id}`);
    // return this.products.find(product => product.id == id);
  }
  removeNew(id): Observable<New>{
    return this.http.delete<New>(`${this.api}/${id}`);
    // return this.products.filter(product => product.id !== id);
  } 
  addNew(news): Observable<New>{ 
    return this.http.post<New>(`${this.api}`, news);
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);  
    // console.log(this.products)
  }
  updateNew(news){ 
     return this.http.put<New>(`${this.api}/${news.id}`, news);
  } 
}