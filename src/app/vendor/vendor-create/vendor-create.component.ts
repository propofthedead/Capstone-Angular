import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router } from '../../../../node_modules/@angular/router';
import {Vendor} from '../vendor';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';
@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  vendor: Vendor= new Vendor();
  logged: User=null;
  verified:boolean=false;
  
  create(): void{
    console.log(this.vendor);
    this.verified=this.able();
    if(this.verified==true){
    this.vendorsvc.create(this.vendor)
      .subscribe(resp=>{
        console.log(resp);
        this.route.navigateByUrl('/vendor/list');
      })
    }
  }
  able():boolean{
    if(this.logged.IsAdmin==true){
      return true;
    }
    return false;
  }
  constructor(private vendorsvc:VendorService, private route: Router, private Syssvc:SystemService) { }

  ngOnInit() {
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
  }

}
