import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Request } from '../request';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.css']
})
export class RequestGetComponent implements OnInit {

  request:Request;
  constructor(private Requestsvc:RequestService,private routed: ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Requestsvc.get(id)
    .subscribe(resp=>{
      this.request=resp.Data;
      console.log(resp);
    })
  }

}
