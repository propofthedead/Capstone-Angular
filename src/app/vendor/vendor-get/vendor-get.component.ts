import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import {Vendor} from '../vendor';

@Component({
  selector: 'app-vendor-get',
  templateUrl: './vendor-get.component.html',
  styleUrls: ['./vendor-get.component.css']
})
export class VendorGetComponent implements OnInit {

  vendor:Vendor;

  constructor(private vendorsvc:VendorService, private routed: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    let id= this.routed.snapshot.params.id;
    this.vendorsvc.get(id)
    .subscribe(resp=>{
      this.vendor=resp.Data
      console.log(resp)      
    })
  }

}
