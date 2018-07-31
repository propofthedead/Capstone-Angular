import { Injectable } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { User } from '@user/user';


const baseUrl: string ='http://localhost:55941'
@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;

  getLoggedInUser():User{
    if(this.isLoggedIn())
      return this.loggedInUser;
    return null;
  }

  getLoggedInUserId():number{
    if(!this.isLoggedIn()) {
      return 0;
    }
    return this.getLoggedInUser().Id;
  }
  getLoggedInUserName():string{
    if(this.isLoggedIn())
       return this.loggedInUser.Firstname+" "+ this.loggedInUser.Lastname;
    return "Login";
  }
  setLoggedInUser(user:User):void{
    console.log("setlogged in user to", user);
    this.loggedInUser=user;
  }

  isLoggedIn(): boolean{
    console.log("is a user logged in?", (this.loggedInUser==null) ? "No":"Yes");
    return this.loggedInUser != null;
  }
  clearLoggedInUser(): void{
    console.log("clear logged in user.");
    this.loggedInUser=null;
  }
  checkLogin():void{
    if(!this.isLoggedIn()){
      this.router.navigateByUrl("/users/login")
    }
  }
  constructor(private router: Router) { 
    console.log("system service init: server url is",baseUrl)
  }
}
