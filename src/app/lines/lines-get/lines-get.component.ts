import { Component, OnInit } from '@angular/core';
import { LinesService } from '../lines.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Lines } from '../lines';

@Component({
  selector: 'app-lines-get',
  templateUrl: './lines-get.component.html',
  styleUrls: ['./lines-get.component.css']
})
export class LinesGetComponent implements OnInit {

  line:Lines;
  constructor(private Linessvc:LinesService, private router:Router, private routed: ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Linessvc.get(id)
    .subscribe(resp=>{
      this.line=resp.Data;
      console.log(resp);
    })
  }

}
