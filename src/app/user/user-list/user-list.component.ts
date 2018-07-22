import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../../JsonResponse';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [
    {Id:1,
    UserName:"ararararaa",
    Password: "sholmo",
    FirstName: "apapa",
    LastName: "ja",
    Email:"adsjfa@adsfs.com",
    Phone: "55555555",
    IsAdmin:false,
    IsReviewer:true,
    Active:true
    }
  ];
  resp: JsonResponse= new JsonResponse();
  

  constructor(private Usersvc: UserService) { }

  ngOnInit() {
    this.Usersvc.list()
      .subscribe(resp=>{
        this.users=resp.Data;
        console.log(resp);
      })
  }

}
