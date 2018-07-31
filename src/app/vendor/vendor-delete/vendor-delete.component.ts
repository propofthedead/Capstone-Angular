import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { VendorService } from '../vendor.service';
import { Vendor } from '../vendor';
import { SystemService } from '../../system/system.service';
import { User } from '@user/user';

@Component({
  selector: 'app-vendor-delete',
  templateUrl: './vendor-delete.component.html',
  styleUrls: ['./vendor-delete.component.css']
})
export class VendorDeleteComponent implements OnInit {

  vendor: Vendor= new Vendor()
  logged: User=null;
  verified: boolean=false;
  delete():void{
    console.log(this.vendor);
    this.verified=this.able();
    if(this.verified==true){
    this.Vendorsvc.remove(this.vendor)
      .subscribe(resp=>{
        this.route.navigateByUrl('/vendor/list');
        console.log(resp);
      })
    }
    this.back();
    }
    able(): boolean{
      if(this.logged.IsAdmin){
        return true;
      }
      return false;
    }
    back():void{
      this.route.navigateByUrl('/vendor/list');
    }
  constructor(private route:Router, private Vendorsvc:VendorService, private routed:ActivatedRoute, private Syssvc: SystemService) { }

  ngOnInit() {
    this.Syssvc.checkLogin();
    this.logged=this.Syssvc.getLoggedInUser();
    let id= this.routed.snapshot.params.id;
    this.Vendorsvc.get(id)
      .subscribe(resp=>{
        this.vendor=resp.Data;
        console.log(resp);
      })
  }

}
