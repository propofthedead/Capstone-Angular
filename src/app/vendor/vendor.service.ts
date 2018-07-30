import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vendor} from './vendor';
import {JsonResponse} from '../JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url="http://localhost:55941/Vendors/";

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"list") as Observable<JsonResponse>
  }
  get(id): Observable<JsonResponse>{
    return this.http.get(this.url+"get/"+id) as Observable<JsonResponse>;
  }

  create(vendor:Vendor): Observable<JsonResponse>{
    return this.http.post(this.url+"create",vendor) as Observable<JsonResponse>;
  }

  edit(vendor:Vendor): Observable<JsonResponse>{
    return this.http.post(this.url+"edit",vendor) as Observable<JsonResponse>;
  }

  remove(vendor:Vendor) : Observable<JsonResponse>{
    return this.http.post(this.url+"delete",vendor) as Observable<JsonResponse>
  }

  product(vendor: Vendor): Observable<JsonResponse>{
    return this.http.post(this.url+"getproducts", vendor) as Observable<JsonResponse>
  }

  constructor( private http: HttpClient){}
}
