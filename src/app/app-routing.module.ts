import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { CustomerPageComponent } from './customer/customer-page/customer-page.component';
import { CustomerSignupComponent } from './customer/customer-signup/customer-signup.component';
import { HomeComponent } from './home/home.component';
import { ManagerLoginComponent } from './manager/manager-login/manager-login.component';
import { ManagerRightsComponent } from './manager/manager-rights/manager-rights.component';
import { ManagerSignUpComponent } from './manager/manager-sign-up/manager-sign-up.component';
import { ManagerComponent } from './manager/manager.component';

import { AddOrderComponent } from './order/add-order/add-order.component';
import { MyorderComponent } from './order/myorder/myorder.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { PublicRightsComponent } from './product/public-rights/public-rights.component';

import { ShipperListComponent } from './shipper/shipper-list/shipper-list.component';
import { ShipperRegisterComponent } from './shipper/shipper-register/shipper-register.component';
import { ShipperRightsComponent } from './shipper/shipper-rights/shipper-rights.component';
import { ShippperLoginComponent } from './shipper/shippper-login/shippper-login.component';

const routes: Routes = [
  {
    path: 'Manager',
    component: ManagerComponent,
    children: [
      {
        path: 'SignUp',
        component: ManagerSignUpComponent,
      },
      {
        path: 'Login',
        component: ManagerLoginComponent,
      },
    ],
  },
  {
    path: 'Login',
    component: ManagerLoginComponent,
  },
  {
    path: 'managerRights',
    component: ManagerRightsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'addStaff',
        component: ManagerSignUpComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'deleteStaff',
        component: ShipperListComponent,
        canActivate: [AuthGuard],
      },
      { path: 'customerSignUp', component: CustomerSignupComponent },
      {
        path: 'listCustomer',
        component: CustomerListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'order',
        component: AddOrderComponent,
        canActivate: [AuthGuard],
      },
      // {
      //   path: 'addProduct',
      //   component: AddProductComponent,
      //   canActivate: [AuthGuard],
      // },
      // {
      //   path: 'listProduct',
      //   component: ListProductComponent,
      //   canActivate: [AuthGuard],
      // },
      {
        path: 'listCustomer',
        component: CustomerListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'listOrder',
        component: OrderListComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'shipperRights',
    component: ShipperRightsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'listOrder',
        component: OrderListComponent,
      },
      {
        path: 'listShipper',
        component: ShipperListComponent,
      },
    ],
  },
  {
    path: 'editOrder/:oid',
    component: AddOrderComponent,
  },
  {
    path: 'edit/:pid',
    component: AddProductComponent,
  },
  {
    path: 'shipperLogin',
    component: ShippperLoginComponent,
  },
  {
    path: 'listShipper',
    component: ShipperListComponent,
  },
  {
    path: 'editCustomer/:cid',
    component: CustomerSignupComponent,
  },
  {
    path: 'Customer',
    component: CustomerPageComponent,
    children: [
      { path: 'customerLogin', component: CustomerLoginComponent },
      { path: 'customerSignUp', component: CustomerSignupComponent },
    ],
  },
  { path: 'customerLogin', component: CustomerLoginComponent },
  {
    path: 'listProduct',
    component: ListProductComponent,
  },
  {
    path: 'listPublicProduct',
    component: PublicRightsComponent,
  },
  {
    path: 'order',
    component: AddOrderComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'myorder',
    component: MyorderComponent,
    canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'listOrder',
    //     component: OrderListComponent,
    //   },
    // ],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
