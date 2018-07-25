import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { Route, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string;
  password: string;

  login():void{
    this.Userscv.authenticate(this.username,this.password)
      .subscribe(resp=>{
        console.log(resp);
        this.route.navigateByUrl('/home');
      })
    
  }


  constructor(private Userscv: UserService, private route: Router) { }

  ngOnInit() {
  }

}
