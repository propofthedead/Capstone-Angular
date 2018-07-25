import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Vendor } from '../vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor:Vendor= new Vendor();
  
  edit():void{
    console.log(this.vendor);
    this.VendorSvc.edit(this.vendor)
    .subscribe(resp=>{
      console.log(resp);
      this.route.navigateByUrl('/vendor/list');
    })
  }
  
  constructor(private VendorSvc: VendorService, private route:Router,private routed:ActivatedRoute) { }

  ngOnInit() {
  let id= this.routed.snapshot.params.id;
  this.VendorSvc.get(id)
    .subscribe(resp=>{
      this.vendor=resp.Data;
      console.log(resp);
    })
  }

}
