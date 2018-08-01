import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Request } from '../request';
import { Lines } from '../../lines/lines';
import { LinesService } from '../../lines/lines.service';

@Component({
  selector: 'app-request-get',
  templateUrl: './request-get.component.html',
  styleUrls: ['./request-get.component.css']
})
export class RequestGetComponent implements OnInit {

  lines:Lines[];
  rlines:Lines[];
  request:Request;
  constructor(private Requestsvc:RequestService,private routed: ActivatedRoute, private Linsvc:LinesService) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Requestsvc.get(id)
    .subscribe(resp=>{
      this.request=resp.Data;
      console.log(resp);
    })

    this.Linsvc.list()
    .subscribe(resp=>{
      this.lines=resp.Data;
      for(let line of this.lines){
        if(line.PurchaseRequestId!=this.request.Id){
          this.rlines.push(line);
        }
      }
    })
  }

}
