import { Component, OnInit } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { Router, ActivatedRoute } from '@angular/router';

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

  back():void{
    this.router.navigateByUrl('/user/list');
  }
  constructor(private router:Router, private Usersvc:UserService, private routed:ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Usersvc.get(id)
      .subscribe(resp=>{
        this.user=resp.Data;
        console.log(resp);
      })
  }

}
