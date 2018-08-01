import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Product } from '../../product/product';
import { Vendor } from '../vendor';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-vendor-product',
  templateUrl: './vendor-product.component.html',
  styleUrls: ['./vendor-product.component.css']
})
export class VendorProductComponent implements OnInit {

  logged:User;
  products: Product[];
  vendor: Vendor;
  constructor(private Vendorsvc: VendorService, private router: Router, private routed: ActivatedRoute, private Syssvc: SystemService) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Vendorsvc.get(id)
    .subscribe(resp=>{
      this.vendor=resp.Data;
      console.log(resp);
    })
    this.Vendorsvc.product(this.vendor)
    .subscribe(resp=>{
      this.products=resp.Data;
      console.log(resp);
    })
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
  }

}
