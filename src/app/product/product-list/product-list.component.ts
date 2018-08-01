import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '../../../../node_modules/@angular/router';
import { Product } from '../product';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  logged: User;
  products: Product[];

  add():void{
    this.route.navigateByUrl('/product/create')
  }
  constructor(private Productsvc: ProductService, private route: Router, private Syssvc:SystemService) { }

  ngOnInit() {
    this.Productsvc.list()
    .subscribe(resp=>{
      console.log(resp);
      this.products=resp.Data;
    })
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
  }

}
