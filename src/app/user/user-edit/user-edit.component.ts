import { Component, OnInit } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User= new User();
  logged: User= null;
  verified: boolean=false;

  edit():void{
    console.log(this.user);
    this.verified=this.able();
    if(this.verified==true){
    this.Usersvc.edit(this.user)
      .subscribe(resp=>{
        console.log(resp);
        this.route.navigateByUrl('/user/list');
      })
    }
  }

  able(): boolean{
    if(this.logged.Id===this.user.Id){
      return true;
    }
    if(this.logged.IsAdmin===true){
      return true;
    }
    return false;
  }

  constructor(private Usersvc: UserService, private route:Router, private routed: ActivatedRoute, private Syssvc:SystemService) { }

  ngOnInit() {
    if(!this.Syssvc.checkLogin()){
      this.route.navigateByUrl('/user/login')
    }
    this.logged=this.Syssvc.getLoggedInUser();
    let id= this.routed.snapshot.params.id;
    this.Usersvc.get(id)
      .subscribe(resp=>{
        this.user=resp.Data;
        console.log(resp);
      })

  }

}
