import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Request } from '../request';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
request: Request;
logged: User;



create():void{
  this.request.UserId=this.logged.Id;
  this.Requestsvc.create(this.request)
  .subscribe(resp=>{
    console.log(resp);
  })
  this.router.navigateByUrl("/request/list");
}
  constructor(private Requestsvc:RequestService, private router: Router, private Syssvc:SystemService) { }

  ngOnInit() {
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
  }

}
