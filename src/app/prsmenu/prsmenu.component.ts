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
    new Menu("Users","/user/list"),
    new Menu("Vendors","/vendor/list"),
    new Menu("Products","/product/list"),
    new Menu("Requests","/request/list"),
    new Menu("about","/about")
  ]
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
