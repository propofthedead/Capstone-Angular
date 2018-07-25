import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  product:Product;
  constructor(private Productsvc:ProductService, private routed:ActivatedRoute, private route:Router) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Productsvc.get(id)
    .subscribe(resp=>{
        this.product=resp.Data;
        console.log(resp);
    })
  }

}
