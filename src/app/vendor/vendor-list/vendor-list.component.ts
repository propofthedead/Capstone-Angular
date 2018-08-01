import { Component, OnInit } from '@angular/core';
import{Vendor} from '../vendor';
import { VendorService } from '../vendor.service';
import { Router } from '../../../../node_modules/@angular/router';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  vendors: Vendor[];
  logged:User;
  constructor(private vendorSvc:VendorService, private route:Router, private Syssvc: SystemService) { }
add():void{
  this.route.navigateByUrl('/vendor/create');
}
  ngOnInit() {
    this.Syssvc.checkLogin();
    this.vendorSvc.list()
    .subscribe(resp=>{
      this.vendors=resp.Data;
      console.log(resp);
    })
    this.logged=this.Syssvc.getLoggedInUser();
  }

}
