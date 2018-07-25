import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-delete',
  templateUrl: './vendor-delete.component.html',
  styleUrls: ['./vendor-delete.component.css']
})
export class VendorDeleteComponent implements OnInit {

  vendor: Vendor= new Vendor()
  delete():void{
    console.log(this.vendor);
    this.Vendorsvc.remove(this.vendor)
      .subscribe(resp=>{
        this.route.navigateByUrl('/vendor/list');
        console.log(resp);
      })
    }

    back():void{
      this.route.navigateByUrl('/vendor/list');
    }
  constructor(private route:Router, private Vendorsvc:VendorService, private routed:ActivatedRoute) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.Vendorsvc.get(id)
      .subscribe(resp=>{
        this.vendor=resp.Data;
        console.log(resp);
      })
  }

}
