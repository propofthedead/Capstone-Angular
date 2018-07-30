import { Component, OnInit } from '@angular/core';
import { LinesService } from '../lines.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Lines } from '../lines';

@Component({
  selector: 'app-line-create',
  templateUrl: './line-create.component.html',
  styleUrls: ['./line-create.component.css']
})
export class LineCreateComponent implements OnInit {

  line: Lines;
  create():void{
    this.linesvc.create(this.line)
    .subscribe(resp=>{
      console.log(resp);
    })
    this.router.navigateByUrl('/request/list')
  }
  constructor(private linesvc:LinesService, private router: Router) { }

  ngOnInit() {
  }

}
