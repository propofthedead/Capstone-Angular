import { Component, OnInit } from '@angular/core';
import { LinesService } from '../lines.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Lines } from '../lines';

@Component({
  selector: 'app-lines-edit',
  templateUrl: './lines-edit.component.html',
  styleUrls: ['./lines-edit.component.css']
})
export class LinesEditComponent implements OnInit {
  line:Lines;

  edit():void{
    this.Linesvc.edit(this.line)
    .subscribe(resp=>{
      console.log(resp);
    })
    this.router.navigateByUrl('/line/list');
  }

  constructor(private Linesvc:LinesService, private router:Router, private routed:ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Linesvc.get(id)
    .subscribe(resp=>{
        this.line=resp.Data;
        console.log(resp);
    })
  }

}
