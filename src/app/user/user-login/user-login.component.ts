import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { Route, Router } from '@angular/router';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  

  user: User= new User();
  login():void{
    this.Sysservice.clearLoggedInUser()
    this.Userscv.authenticate(this.user.Username,this.user.Password)
      .subscribe(resp=>{
        console.log(resp);
        this.user=resp.Data;
        this.Sysservice.setLoggedInUser(this.user);
        this.route.navigateByUrl('/home');
   
      })
  }


  constructor(private Userscv: UserService, private route: Router, private Sysservice: SystemService) { }

  ngOnInit() {
  }

}
