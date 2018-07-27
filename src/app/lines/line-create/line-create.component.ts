import { Component, OnInit } from '@angular/core';
import { Lines } from '../lines';
import { LinesService } from '../lines.service';
import { Router } from '../../../../node_modules/@angular/router';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product';

@Component({
  selector: 'app-line-create',
  templateUrl: './line-create.component.html',
  styleUrls: ['./line-create.component.css']
})
export class LineCreateComponent implements OnInit {
  line: Lines;
  requests: Request[];
  products: Product[];
  constructor(private Linesvc:LinesService, private router: Router, private Requestsvc:RequestService, private Productsvc: ProductService) { }

  ngOnInit() {
    this.Requestsvc.list()
    .subscribe(resp=>{
      this.requests=resp.Data;
      console.log(resp);
    })
    this.Productsvc.list()
    .subscribe(resp=>{
      this.products=resp.Data;
      console.log(resp);
    })
  }

}
