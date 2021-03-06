import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Product } from '../product';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;
  vendors: Vendor[];
  logged:User;
  edit():void{
    this.Productsvc.edit(this.product)
    .subscribe(resp=>{
      console.log(resp);
    });
    this.route.navigateByUrl('/products/list');
  }

  constructor(private Productsvc:ProductService,private route:Router, private routed: ActivatedRoute, private Vendorsvc:VendorService, private Syssvc: SystemService) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Productsvc.get(id)
    .subscribe(resp=>{
        this.product=resp.Data;
        console.log(resp);
    })

    this.Vendorsvc.list()
      .subscribe(resp=>{
        this.vendors=resp.Data;
        console.log(resp);
      })
      this.Syssvc.checkLogin();
      this.logged=this.Syssvc.getLoggedInUser();
      if(this.logged.IsAdmin==false){
        this.route.navigateByUrl('/product/list');
      }
  }

}
