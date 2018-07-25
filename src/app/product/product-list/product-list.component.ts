import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  constructor(private Productsvc: ProductService, private route: Router) { }

  ngOnInit() {
    this.Productsvc.list()
    .subscribe(resp=>{
      console.log(resp);
      this.products=resp.Data;
    })
  }

}
