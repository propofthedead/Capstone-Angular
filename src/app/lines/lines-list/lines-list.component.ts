import { Component, OnInit } from '@angular/core';
import { LinesService } from '../lines.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Lines } from '../lines';

@Component({
  selector: 'app-lines-list',
  templateUrl: './lines-list.component.html',
  styleUrls: ['./lines-list.component.css']
})
export class LinesListComponent implements OnInit {

  lines: Lines[]
  constructor(private Listsvc:LinesService,private route: Router) { }

  ngOnInit() {
    this.Listsvc.list()
    .subscribe(resp=>{
      this.lines=resp.Data;
      console.log(resp);
    })
  }

}
