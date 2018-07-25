import { Component, OnInit } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { Route, Router } from '@angular/router';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[];
  
  
  gotoCreate(){
     this.route.navigateByUrl('Users/create');
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
