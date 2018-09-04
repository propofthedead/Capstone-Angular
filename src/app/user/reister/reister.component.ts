import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/user.service';
import { Router } from '@angular/router';
import { User } from '@user/user';


@Component({
  selector: 'app-reister',
  templateUrl: './reister.component.html',
  styleUrls: ['./reister.component.css']
})
export class RegisterComponent implements OnInit {

  newUser :User


  create(){
    this.newUser.IsAdmin=false;
    this.newUser.IsReviewer=false;
    this.newUser.Active=true;

    this.Usersvc.create(this.newUser);
    this.router.navigateByUrl('/user/login')
  }

  constructor(private Usersvc: UserService, private router: Router) { }

  ngOnInit() {
  }

}
