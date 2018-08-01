import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];
  logged:User;

  add():void{
    this.route.navigateByUrl('/request/create');
  }
  constructor(private Requestsvc:RequestService, private Syssvc:SystemService, private route: Router) { }

  ngOnInit() {
    this.Requestsvc.list()
    .subscribe(resp=>{
      this.requests=resp.Data;
      console.log(resp);
    })
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser()
  }

}
