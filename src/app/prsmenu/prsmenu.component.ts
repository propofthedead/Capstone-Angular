import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'prsmenu',
  templateUrl: './prsmenu.component.html',
  styleUrls: ['./prsmenu.component.css']
})
export class PrsmenuComponent implements OnInit {

  menus: Menu[]=[
    new Menu("Prs","/home"),
    new Menu("Users","/users/list"),
    new Menu("Vendors","/vendors/list"),
    new Menu("Products","/products/list"),
    new Menu("Requests","/requests/list"),
    new Menu("about","/about")
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
