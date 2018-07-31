import { Component, OnInit } from '@angular/core';
import {UserService} from '@user/user.service';
import {User} from '@user/user';
import {JsonResponse} from '../../JsonResponse';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  user: User;
  id: number;
  loggedInuser: User=null;

  constructor(private userscv: UserService, private route: ActivatedRoute, private Syssvc:SystemService) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id
    this.userscv.get(id)
    .subscribe(resp=>{
      this.user=resp.Data;
      console.log(resp);
    });
    this.Syssvc.checkLogin();
    this.loggedInuser=this.Syssvc.getLoggedInUser();
  }

}
