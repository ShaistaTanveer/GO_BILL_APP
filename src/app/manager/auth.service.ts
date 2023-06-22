import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Shipper } from '../shipper/shipper.model';
import { Subject } from 'rxjs';
import { Product } from '../product/product.model';
import { Order } from '../order/order.model';
import { environment } from 'src/environments/environment';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.url;
  public activeshipper: any;
  public activecustomer: any;
  public isactivemanager = false;
  public isactivecustomer = false;
  public isactiveshipper = false;
  public ispublic = false;
  public token: string;
  public shipper: Shipper[] = [];
  public product: Product[] = [];
  public order: Order[] = [];
  filterProducts: any;

  constructor(private http: HttpClient, public router: Router) {}

  savemydata(data: any) {
    return this.http.post(`${this.url}/family`, data);
  }
  getMyData() {
    return this.http.get<{ data: any }>(`${this.url}/mydatafortree`);
  }

  postdata(data: any) {
    return this.http.post(`${this.url}/tree`, data);
  }
  getBooks() {
    return this.http.get<{ course: any }>(`${this.url}/course_list`);
  }
  getById(id: any) {
    return this.http.get<{ tree: any; course: any }>(`${this.url}/edit/` + id);
  }
  updateData(id: any, data: any) {
    return this.http.put(`${this.url}/update/${id}`, data);
  }
  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      token: localStorage.getItem('token') || '',
    });
    return headers;
  }
  saveAuth(token: string, id: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
  }
  getToken() {
    return this.token;
  }
  getshipperId() {
    return this.activeshipper;
  }
  getcustomerId() {
    return this.activecustomer;
  }
  getActiveManager() {
    return this.isactivemanager;
  }
  getactivecustomer() {
    return this.isactivecustomer;
  }
  getactiveShipper() {
    return this.isactiveshipper;
  }
  getpublicactive() {
    return this.ispublic;
  }
  getFilteredproduct() {
    return this.filterProducts;
  }
  registerManager(authData: any) {
    console.log(authData, 'authData');

    return this.http.post(`${this.url}/staffRegister`, authData, {
      headers: this.getHeader(),
    });
  }
  ///
  login(authData: any) {
    return this.http.post<{ token: string; id: string; role: string }>(
      `${this.url}/login`,
      authData,
      {
        headers: this.getHeader(),
      }
    );
  }

  //shipper functions
  shipperRegister(shipper: any) {
    return this.http.post(`${this.url}/shipper_register`, shipper, {
      headers: this.getHeader(),
    });
  }
  publicRegister(shipper: any) {
    return this.http.post(`${this.url}/registerPublic`, shipper, {
      headers: this.getHeader(),
    });
  }

  getCustomerbyId(cid: any) {
    return this.http.get<{ updatedCustomer: string }>(
      `${this.url}/get_customer/` + cid
    );
  }

  updateCustomer(cid: any, authData: any) {
    return this.http.put(`${this.url}/customer/` + cid, authData, {
      headers: this.getHeader(),
    });
  }

  deleteCustomer(customerId: string) {
    return this.http.delete(`${this.url}/delete_customer/` + customerId, {
      headers: this.getHeader(),
    });
  }

  addOrder(authData: any) {
    return this.http.post(`${this.url}/add_order`, authData, {
      headers: this.getHeader(),
    });
  }

  //shipperlogin
  shipperlogin(authData: any) {
    return this.http.post<{ token: string; id: string }>(
      `${this.url}/shipper_login`,
      authData,
      {
        headers: this.getHeader(),
      }
    );
  }

  //shipper get

  getshippers() {
    return this.http.get<{ shipperList: string }>(`${this.url}/get_shippers`, {
      headers: this.getHeader(),
    });
  }

  getShippersbyId(id: any) {
    return this.http.get(`${this.url}/get_shipper/` + id, {
      headers: this.getHeader(),
    });
  }

  //shipper update
  updateShipper(id: any, shipper: any) {
    return this.http.put(`${this.url}/shipper/` + id, shipper, {
      headers: this.getHeader(),
    });
  }

  //shipper delete
  deleteShipper(id: string) {
    return this.http.delete(`${this.url}/delete_shipper/` + id, {
      headers: this.getHeader(),
    });
  }

  deleteOrder(oid: string) {
    return this.http.delete(`${this.url}/delete_order/` + oid, {
      headers: this.getHeader(),
    });
  }
  // getOrder() {
  //   return this.http.get<{ orderList: string }>(`${this.url}/get_orders`, {
  //     headers: this.getHeader(),
  //   });
  // }

  getOrder(productsPerPage: number, selectedPage: number, data: any) {
    const queryParams = `?limit=${productsPerPage}&page=${selectedPage}&searchdata=${data}`;
    return this.http.get<{ orderList: string }>(
      `${this.url}/get_orders` + queryParams,
      {
        headers: this.getHeader(),
      }
    );
  }

  getCustomer(postsPerPage: number, currentPage: number, data: any) {
    const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}&data=${data}`;
    return this.http.get(`${this.url}/get_customer` + queryParams, {
      headers: this.getHeader(),
    });
  }

  getProducts() {
    return this.http.get(`${this.url}/get_products`);
  }

  getProductsbyId(pid: any) {
    return this.http.get(`${this.url}/get_products/` + pid);
  }

  getOrderbyId(orderId: any) {
    return this.http.get<{ updatedOrder: any }>(
      `${this.url}/get_order/` + orderId
    );
  }

  addProduct(authData: any) {
    return this.http.post(`${this.url}/add_product`, authData, {
      headers: this.getHeader(),
    });
  }

  updateProduct(pid: any, authData: any) {
    return this.http.put(`${this.url}/product/` + pid, authData, {
      headers: this.getHeader(),
    });
  }

  registerCustomer(authData: any) {
    return this.http.post(`${this.url}/addCustomer`, authData, {
      headers: this.getHeader(),
    });
  }

  customerlogin(authData: any) {
    return this.http.post<{ token: string; id: string }>(
      `${this.url}/customer_login`,
      authData,
      {
        headers: this.getHeader(),
      }
    );
  }

  //order

  // addOrder(authData: any) {
  //   return this.http.post(`${this.url}/add_order`, authData, {
  //     headers: this.getHeader(),
  //   });
  // }

  updateOrder(orderId: any, authData: any) {
    return this.http.put(`${this.url}/edit_order/` + orderId, authData);
  }

  //filetr products
  filterProduct(category: string, stockstatus: string, price: string) {
    const filterProduct1 = {
      category: category,
      stockstatus: stockstatus,
      price: price,
    };
    this.http
      .post<{ productList: any }>(
        `${this.url}/get_products_filter`,
        filterProduct1
      )
      .subscribe((response) => {
        this.filterProducts = response.productList;
      });
  }
}
