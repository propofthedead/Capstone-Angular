import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {UserComponent} from './user/user.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserCreateComponent} from './user/user-create/user-create.component';
import {UserDeleteComponent} from './user/user-delete/user-delete.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserGetComponent} from './user/user-get/user-get.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'about', component: AboutComponent},

  {path: 'user',component: UserComponent},
  {path: 'user/list', component: UserListComponent},
  {path: 'user/delete', component: UserDeleteComponent},
  {path:'user/create', component: UserCreateComponent},
  {path:'user/edit/:id',component: UserEditComponent},
  {path: 'user/get/:id', component: UserGetComponent},


  
  {path:'**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
