import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Vendor } from '../vendor';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  vendor:Vendor= new Vendor();
  logged: User=null;
  verified: boolean=false;
  edit():void{
    console.log(this.vendor);
    this.verified=this.able();
    if(this.verified==true){
    this.VendorSvc.edit(this.vendor)
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
  constructor(private VendorSvc: VendorService, private route:Router,private routed:ActivatedRoute, private Syssvc: SystemService) { }

  ngOnInit() {
  this.Syssvc.checkLogin();
  this.logged=this.Syssvc.getLoggedInUser();
  let id= this.routed.snapshot.params.id;
  this.VendorSvc.get(id)
    .subscribe(resp=>{
      this.vendor=resp.Data;
      console.log(resp);
    })
  if(this.logged.IsAdmin==false){
    this.route.navigateByUrl('/vendor/list');
  }
  }

}
