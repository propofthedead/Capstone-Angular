import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../../JsonResponse';
import { Route, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [];
  resp: JsonResponse= new JsonResponse();
  
  gotoCreate(){
     this.route.navigateByUrl('users/create');
  }

  constructor(private Usersvc: UserService, private route: Router) { }

  ngOnInit() {
    this.Usersvc.list()
      .subscribe(resp=>{
        this.users=resp.Data;
        console.log(resp);
      })
  }

}
