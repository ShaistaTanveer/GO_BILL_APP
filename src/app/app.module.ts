import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerComponent } from './manager/manager.component';
import { ManagerSignUpComponent } from './manager/manager-sign-up/manager-sign-up.component';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { ManagerRightsComponent } from './manager/manager-rights/manager-rights.component';
import { ShipperListComponent } from './shipper/shipper-list/shipper-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CustomerSignupComponent } from './customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerPageComponent } from './customer/customer-page/customer-page.component';
import { AuthInterceptor } from './manager/auth-interceptor';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { ShipperRegisterComponent } from './shipper/shipper-register/shipper-register.component';
import { ShippperLoginComponent } from './shipper/shippper-login/shippper-login.component';
import { AddOrderComponent } from './order/add-order/add-order.component';
import { ShipperRightsComponent } from './shipper/shipper-rights/shipper-rights.component';
import { MyorderComponent } from './order/myorder/myorder.component';
import { PublicRightsComponent } from './product/public-rights/public-rights.component';

import { HomeComponent } from './home/home.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManagerComponent,
    ManagerSignUpComponent,
    ManagerLoginComponent,
    ManagerRightsComponent,
    ShipperRegisterComponent,
    ShipperListComponent,
    AddProductComponent,
    ListProductComponent,
    ShippperLoginComponent,
    CustomerSignupComponent,
    CustomerLoginComponent,
    CustomerPageComponent,
    CustomerListComponent,
    OrderListComponent,
    AddOrderComponent,
    ShipperRightsComponent,
    MyorderComponent,
    PublicRightsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
