import { Injectable } from '@angular/core';
import { Product } from './product';
import{JsonResponse} from '../JsonResponse';
import{Observable} from 'rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:55941/Products/";

    list(): Observable<JsonResponse>{
      return this.http.get(this.url+"list") as Observable<JsonResponse>
    }
    get(id): Observable<JsonResponse>{
      return this.http.get(this.url+"get/"+id) as Observable<JsonResponse>;
    }

    create(product:Product): Observable<JsonResponse>{
      return this.http.post(this.url+"create",product) as Observable<JsonResponse>;
    }

    edit(product:Product): Observable<JsonResponse>{
      return this.http.post(this.url+"edit",product) as Observable<JsonResponse>;
    }

    remove(product:Product) : Observable<JsonResponse>{
      return this.http.post(this.url+"delete",product) as Observable<JsonResponse>
    }

    

    constructor( private http: HttpClient){}
  }