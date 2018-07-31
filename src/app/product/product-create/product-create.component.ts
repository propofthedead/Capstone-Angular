import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '../../../../node_modules/@angular/router';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor';
import { Product } from '../product';
import { User } from '@user/user';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  vendors:Vendor[];
  product: Product= new Product();
  logged: User;
  create(): void{
    
    console.log(this.product);
    this.Prodocutsvc.create(this.product)
      .subscribe(resp=>{
        console.log(resp)
      })
  }

  constructor(private Prodocutsvc:ProductService, private route:Router, private Vendorsvc:VendorService, private Syssvc:SystemService) { }

  ngOnInit() {
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
