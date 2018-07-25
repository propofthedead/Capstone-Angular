import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UserComponent} from '@user/user.component';
import {UserListComponent} from '@user/user-list/user-list.component';
import {UserCreateComponent} from '@user/user-create/user-create.component';
import {UserDeleteComponent} from '@user/user-delete/user-delete.component';
import {UserEditComponent} from '@user/user-edit/user-edit.component';
import {UserGetComponent} from '@user/user-get/user-get.component';
import { UserLoginComponent } from '@user/user-login/user-login.component';

import { combineLatest } from 'rxjs';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorGetComponent } from './vendor/vendor-get/vendor-get.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDeleteComponent } from './vendor/vendor-delete/vendor-delete.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'about', component: AboutComponent},

  
  {path: 'user/list', component: UserListComponent},
  {path: 'user/delete/:id', component: UserDeleteComponent},
  {path:'user/create', component: UserCreateComponent},
  {path:'user/edit/:id',component: UserEditComponent},
  {path: 'user/get/:id', component: UserGetComponent},
  {path: 'user/login',component: UserLoginComponent},

  {path:'vendor/list',component:VendorListComponent},
  {path:'vendor/get/:id',component:VendorGetComponent},
  {path: 'vendor/create', component:VendorCreateComponent},
  {path:'vendor/edit/:id',component:VendorEditComponent},
  {path: 'vendor/delete/:id', component: VendorDeleteComponent},

  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
