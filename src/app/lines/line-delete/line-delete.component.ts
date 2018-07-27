import { Component, OnInit } from '@angular/core';
import { LinesService } from '../lines.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Lines } from '../lines';

@Component({
  selector: 'app-line-delete',
  templateUrl: './line-delete.component.html',
  styleUrls: ['./line-delete.component.css']
})
export class LineDeleteComponent implements OnInit {
line:Lines
  constructor(private LineSvc:LinesService, private routed: ActivatedRoute, private router:Router) { }

  ngOnInit() 
  {
    let id= this.routed.snapshot.params.id;
    this.LineSvc.get(id)
    .subscribe(resp=>{
      this.line=resp.Data;
      console.log(resp);
    })
  }

}
