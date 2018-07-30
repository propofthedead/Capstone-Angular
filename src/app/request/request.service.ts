import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import{Request} from './request';
import { JsonResponse } from '../JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url="http://localhost:55941/PurchaseRequests/"

  list(): Observable<JsonResponse>{
    return this.http.get(this.url+"list") as Observable<JsonResponse>;
  }

  get(id): Observable<JsonResponse>{
    return this.http.get(this.url+"get/"+id) as Observable<JsonResponse>;
  }

  edit(request: Request): Observable<JsonResponse>{
    return this.http.post(this.url+"edit",request) as Observable<JsonResponse>;
  }

  create(request:Request): Observable<JsonResponse>{
    return this.http.post(this.url+"create",request) as Observable<JsonResponse>;
  }

  remove(request:Request): Observable<JsonResponse>{
    return this.http.post(this.url+"delete",request) as Observable<JsonResponse>;
  }

  constructor(private http: HttpClient) { }
}
