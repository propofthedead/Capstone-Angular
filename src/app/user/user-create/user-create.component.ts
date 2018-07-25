import { Component, OnInit,NgModule } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

 user: User= new User();

  create(): void{
    console.log(this.user);
    this.Usersvc.create(this.user)
      .subscribe(resp=>{
        this.router.navigateByUrl('/user/list');
        console.log(resp);
      })
  }

  constructor(private Usersvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}
