import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Request } from '../request';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request;
  logged: User;
  
   
    edit():void{
    this.Requestsvc.edit(this.request)
    .subscribe(resp=>{
      console.log(resp);
    })
    this.router.navigateByUrl('/request/list');
  }
  constructor(private Requestsvc: RequestService, private router:Router, private routed: ActivatedRoute, private Syssvc: SystemService) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Requestsvc.get(id)
    .subscribe(resp=>{
      this.request= resp.Data;
      console.log(resp);
    })
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
    if(!(this.logged.IsAdmin ==true|| this.logged.IsReviewer==true|| this.logged.Id==this.request.UserId)){
      this.router.navigateByUrl('/request/list');
    }
  }

}
