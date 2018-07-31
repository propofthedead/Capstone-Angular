import { Component, OnInit } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User= new User();
  logged: User=null;
  verified: boolean=false;
  delete():void{
    console.log(this.user);
    this.verified=this.able();
    if(this.verified==true){
    this.Usersvc.remove(this.user)
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
  back():void{
    this.router.navigateByUrl('/user/list');
  }
  constructor(private router:Router, private Usersvc:UserService, private routed:ActivatedRoute, private Syssvc:SystemService) { }

  ngOnInit() {
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();

    let id= this.routed.snapshot.params.id;
    this.Usersvc.get(id)
      .subscribe(resp=>{
        this.user=resp.Data;
        console.log(resp);
      })
  }

}
