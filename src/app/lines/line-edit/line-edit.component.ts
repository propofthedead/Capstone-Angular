import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { LinesService } from '../lines.service';
import { Lines } from '../lines';

@Component({
  selector: 'app-line-edit',
  templateUrl: './line-edit.component.html',
  styleUrls: ['./line-edit.component.css']
})
export class LineEditComponent implements OnInit {

  line: Lines;

  constructor(private routed: ActivatedRoute, private linesvc:LinesService, private router: Router) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.linesvc.get(id)
    .subscribe(resp=>{
      this.line=resp.Data;
      console.log(resp);
    })
  }

}
