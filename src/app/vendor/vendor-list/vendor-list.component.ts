import { Component, OnInit } from '@angular/core';
import{Vendor} from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '../../../../node_modules/@angular/router';
import { SystemService } from '../../system/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];

  constructor(private vendorSvc:VendorService, private route:Router, private Syssvc: SystemService) { }

  ngOnInit() {
    this.Syssvc.checkLogin();
    this.vendorSvc.list()
    .subscribe(resp=>{
      this.vendors=resp.Data;
      console.log(resp);
    })
  }

}
