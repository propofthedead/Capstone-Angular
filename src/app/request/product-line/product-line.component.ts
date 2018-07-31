import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { RequestService } from '../request.service';
import { Product } from '../../product/product';
import { Lines } from '../../lines/lines';

@Component({
  selector: 'app-product-line',
  templateUrl: './product-line.component.html',
  styleUrls: ['./product-line.component.css']
})
export class ProductLineComponent implements OnInit {

  products: Product[];
  line: Lines;
  request: Request;


  constructor(private Prosvc:ProductService, private routed: ActivatedRoute, private router:Router, private Reqsvc:RequestService) { }

  ngOnInit() {
     this.Prosvc.list()
     .subscribe(resp=>{
       this.products=resp.Data;
       console.log(resp);
     })

     let id= this.routed.snapshot.params.id;
     this.Reqsvc.get(id)
     .subscribe(resp=>{
       this.request= resp.Data;
       console.log(resp);
     })
  }

}
