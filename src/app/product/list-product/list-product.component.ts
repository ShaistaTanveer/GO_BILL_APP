import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/manager/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  productList: any;
  ispublic: any;
  isamanager: any;
  isacustomer: any;
  isashipper: any;
  iscategory: any;
  isprice: any;
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.authService.getProducts().subscribe((response: any) => {
      this.ispublic = this.authService.getpublicactive();
      this.isamanager = this.authService.getActiveManager();
      this.isashipper = this.authService.getactiveShipper();
      this.isacustomer = this.authService.getactivecustomer();
      this.productList = response.productList;
      return { productList: response.productList };
    });
  }

  onUpdateProduct(): void {}
}
