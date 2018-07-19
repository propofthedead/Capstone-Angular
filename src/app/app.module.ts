import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserChangeComponent } from './user/user-change/user-change.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserGetComponent } from './user/user-get/user-get.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    UserChangeComponent,
    UserDeleteComponent,
    HomeComponent,
    AboutComponent,
    UserEditComponent,
    UserGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
