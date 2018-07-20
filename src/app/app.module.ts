import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDeleteComponent } from './user/user-delete/user-delete.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserGetComponent } from './user/user-get/user-get.component';
import { VendorComponent } from './vendor/vendor.component';
import { VendorGetComponent } from './Vendor/vendor-get/vendor-get.component';
import { VendorListComponent } from './Vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './Vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserCreateComponent,
    UserDeleteComponent,
    HomeComponent,
    AboutComponent,
    UserEditComponent,
    UserGetComponent,
    VendorComponent,
    VendorGetComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
