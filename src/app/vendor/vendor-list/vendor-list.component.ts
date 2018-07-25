import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { VendorService } from '../vendor.service';
import {Vendor} from '../vendor';
import {JsonResponse} from '../../JsonResponse';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor(private vendorsvc: VendorService, private route:Router) { }

  ngOnInit() {
    this.vendorsvc.list()
      .subscribe(resp=>{
        this.vendors=resp.Data;
        console.log(resp);
      })
  }

}
