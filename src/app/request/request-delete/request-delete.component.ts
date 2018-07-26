import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Request } from '../request';

@Component({
  selector: 'app-request-delete',
  templateUrl: './request-delete.component.html',
  styleUrls: ['./request-delete.component.css']
})
export class RequestDeleteComponent implements OnInit {

  request: Request;
  constructor(private Requestsvc: RequestService, private router: Router, private routed: ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Requestsvc.get(id)
    .subscribe(resp=>{
      this.request=resp.Data;
      console.log(resp);
    })
  }

}