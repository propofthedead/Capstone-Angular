import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';
import {JsonResponse} from '../JsonResponse';

@Injectable({
    providedIn:'root'
})

export class UserService{

    url="http://localhost:62556/Users/";

    list(): Observable<JsonResponse>{
      return this.http.get(this.url+"List") as Observable<JsonResponse>
    }
    get(id: number): Observable<JsonResponse>{
      return this.http.get(this.url+"Get/"+id) as Observable<JsonResponse>;
    }

    create(user:User): Observable<JsonResponse>{
      return this.http.post(this.url+"Create",user) as Observable<JsonResponse>;
    }

    change(user: User): Observable<JsonResponse>{
      return this.http.post(this.url+"Change",user) as Observable<JsonResponse>;
    }

    remove(user: User) : Observable<JsonResponse>{
      return this.http.post(this.url+"Delete",user) as Observable<JsonResponse>
    }

    constructor( private http: HttpClient){}
}