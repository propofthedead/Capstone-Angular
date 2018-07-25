import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '../../../../node_modules/@angular/router';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor';
import { Product } from '../product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  vendors:Vendor[];
  product: Product= new Product();
  constructor(private Prodocutsvc:ProductService, private route:Router, private Vendorsvc:VendorService) { }

  ngOnInit() {
    this.Vendorsvc.list()
    .subscribe(resp=>{
      this.vendors=resp.Data;
      console.log(resp);
    })
  }

}
