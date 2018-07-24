import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';
import {JsonResponse} from '../../JsonResponse';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  user: User;
  id: number;
  

  constructor(private userscv: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
     let id = this.route.snapshot.params.id
    this.userscv.get(id)
    .subscribe(resp=>{
      this.user=resp.Data;
      console.log(resp);
    });
  }

}
