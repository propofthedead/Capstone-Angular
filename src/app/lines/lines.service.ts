import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';

import { JsonResponse } from '../JsonResponse';
import { Lines } from './lines';
@Injectable({
  providedIn: 'root'
})
export class LinesService {

  url="http://localhost:55941/Lines/"

  list():Observable<JsonResponse>{
    return this.http.get(this.url+"list") as Observable<JsonResponse>
  }

  get(id): Observable<JsonResponse>{
    return this.http.get(this.url+"get/"+id) as Observable<JsonResponse>
  }

  create(line:Lines): Observable<JsonResponse>{
    return this.http.post(this.url+"create",line) as Observable<JsonResponse>
  }

  edit(line: Lines) : Observable<JsonResponse>{
    return this.http.post(this.url+"edit", line) as Observable<JsonResponse>
  }

  remove(line: Lines): Observable<JsonResponse>{
    return this.http.post(this.url+"delete",line) as Observable<JsonResponse>
  }

  constructor(private http:HttpClient) { }
}
