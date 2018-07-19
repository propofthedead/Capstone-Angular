import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../../JsonResponse';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  user: User= new User();

  

  constructor(private userscv: UserService) { }

  ngOnInit() {
    this.userscv.get(this.user.Id)
    .subscribe(resp=>{
      this.user=resp.Data;
      console.log(resp);
    });
  }

}
