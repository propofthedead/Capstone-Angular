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
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductGetComponent } from './product/product-get/product-get.component';
import { LinesListComponent } from './lines/lines-list/lines-list.component';
import { LinesGetComponent } from './lines/lines-get/lines-get.component';
import { LineDeleteComponent } from './lines/line-delete/line-delete.component';
import { LineEditComponent } from './lines/line-edit/line-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { LineCreateComponent } from './lines/line-create/line-create.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestGetComponent } from './request/request-get/request-get.component';
import { RequestDeleteComponent } from './request/request-delete/request-delete.component';
import { ProductLineComponent } from './request/product-line/product-line.component';
import {RegisterComponent} from './user/reister/reister.component';


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
  {path: 'register', component: RegisterComponent},

  {path:'vendor/list',component:VendorListComponent},
  {path:'vendor/get/:id',component:VendorGetComponent},
  {path: 'vendor/create', component:VendorCreateComponent},
  {path:'vendor/edit/:id',component:VendorEditComponent},
  {path: 'vendor/delete/:id', component: VendorDeleteComponent},

  {path: 'product/create',component:ProductCreateComponent},
  {path:'product/list',component:ProductListComponent},
  {path: 'product/edit/:id',component: ProductEditComponent},
  {path:'product/detail/:id',component:ProductGetComponent},
  {path: 'product/delete/:id',component: ProductDeleteComponent},

  {path:'line/list',component:LinesListComponent},
  {path:'line/detail/:id',component:LinesGetComponent},
  {path: 'line/delete/:id', component: LineDeleteComponent},
  {path: 'line/edit/:id', component:LineEditComponent},
  {path: 'line/create', component: LineCreateComponent},

  {path: 'request/list', component:RequestListComponent},
  {path:'request/create', component:RequestCreateComponent},
  {path: 'request/edit/:id',component: RequestEditComponent},
  {path: 'request/detail/:id', component: RequestGetComponent},
  {path: 'request/delete/:id', component: RequestDeleteComponent},
  {path:'request/products/:id',component: ProductLineComponent},

  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
