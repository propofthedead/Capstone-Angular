import { Component, OnInit,NgModule } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { Router } from '@angular/router';
import { SystemService } from '../../system/system.service';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

 user: User= new User();
 logged: User=null;
 verified: boolean=false;
  create(): void{
    console.log(this.user);
    this.verified=this.able();
    if(this.verified==true){
    this.Usersvc.create(this.user)
      .subscribe(resp=>{
        this.router.navigateByUrl('/user/list');
        console.log(resp);
      })
    }
  }

  able():boolean{
    if(this.logged.IsAdmin==true){
      return true;
    }
    return false;
  }

  constructor(private Usersvc: UserService, private router: Router, private Syssvc: SystemService) { }

  ngOnInit() {
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
  }

}
