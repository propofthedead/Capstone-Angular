import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../../JsonResponse';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User= new User();
  

  edit():void{
    console.log(this.user);
    this.Usersvc.edit(this.user)
      .subscribe(resp=>{
        console.log(resp);
        this.route.navigateByUrl('/user/list');
      })
  }

  constructor(private Usersvc: UserService, private route:Router, private routed: ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Usersvc.get(id)
      .subscribe(resp=>{
        this.user=resp.Data;
        console.log(resp);
      })

  }

}
