import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[];

  constructor(private Requestsvc:RequestService) { }

  ngOnInit() {
    this.Requestsvc.list()
    .subscribe(resp=>{
      this.requests=resp.Data;
      console.log(resp);
    })
  }

}
