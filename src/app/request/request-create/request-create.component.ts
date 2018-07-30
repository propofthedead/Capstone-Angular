import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Request } from '../request';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
request: Request;

create():void{
  this.Requestsvc.create(this.request)
  .subscribe(resp=>{
    console.log(resp);
  })
}
  constructor(private Requestsvc:RequestService, private router: Router) { }

  ngOnInit() {
  }

}
