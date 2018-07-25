import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from '@user/user.component';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';
import { UserDeleteComponent } from '@user/user-delete/user-delete.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { UserGetComponent } from '@user/user-get/user-get.component';
import { VendorComponent } from './vendor/vendor.component';
import { PrsmenuComponent } from './prsmenu/prsmenu.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorGetComponent } from './vendor/vendor-get/vendor-get.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDeleteComponent } from './vendor/vendor-delete/vendor-delete.component';
import { UserLoginComponent } from '@user/user-login/user-login.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductGetComponent } from './product/product-get/product-get.component';

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
    
    PrsmenuComponent,
    
    VendorListComponent,
    
    VendorGetComponent,
    
    VendorCreateComponent,
    
    VendorEditComponent,
    
    VendorDeleteComponent,
    UserLoginComponent,
    ProductComponent,
    ProductListComponent,
    ProductGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
