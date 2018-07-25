import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '../../../../node_modules/@angular/router';
import {Vendor} from '../vendor';
@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor= new Vendor();

  create(): void{
    console.log(this.vendor);
    this.vendorsvc.create(this.vendor)
      .subscribe(resp=>{
        console.log(resp);
        this.route.navigateByUrl('/vendor/list');
      })
  }
  constructor(private vendorsvc:VendorService, private route: Router) { }

  ngOnInit() {
  }

}
