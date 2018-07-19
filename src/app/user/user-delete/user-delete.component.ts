import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../../JsonResponse';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User= new User();
  delete():void{
    console.log(this.user);
    this.Usersvc.remove(this.user)
      .subscribe(resp=>{
        this.router.navigateByUrl('/user/list');
        console.log(resp);
      })
  }
  constructor(private router:Router, private Usersvc:UserService) { }

  ngOnInit() {
  }

}
