import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {JsonResponse} from '../JsonResponse';

@Injectable({
    providedIn:'root'
})

export class UserService{

    url="http://localhost:55941/Users/";

    list(): Observable<JsonResponse>{
      return this.http.get(this.url+"list") as Observable<JsonResponse>
    }
    get(id): Observable<JsonResponse>{
      return this.http.get(this.url+"get/"+id) as Observable<JsonResponse>;
    }

    create(user:User): Observable<JsonResponse>{
      return this.http.post(this.url+"create",user) as Observable<JsonResponse>;
    }

    edit(user: User): Observable<JsonResponse>{
      return this.http.post(this.url+"edit",user) as Observable<JsonResponse>;
    }

    remove(user: User) : Observable<JsonResponse>{
      return this.http.post(this.url+"delete",user) as Observable<JsonResponse>
    }

    constructor( private http: HttpClient){}
}