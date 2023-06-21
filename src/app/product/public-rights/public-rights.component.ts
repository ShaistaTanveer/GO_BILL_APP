import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';

@Component({
  selector: 'app-public-rights',
  templateUrl: './public-rights.component.html',
  styleUrls: ['./public-rights.component.css'],
})
export class PublicRightsComponent implements OnInit {
  selectedcategory = '';
  selectedstockstatus = '';
  selectedprice = '';
  productList: any;
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productList = this.authService.getFilteredproduct();
  }
  onfilter(form: NgForm) {
    this.productList = this.authService.getFilteredproduct();
    if (form.invalid) {
      return;
    }
    this.authService.filterProduct(
      (form.value.category = this.selectedcategory),
      (form.value.stockstatus = this.selectedstockstatus),
      (form.value.price = this.selectedprice)
    );

    this.productList = this.authService.getFilteredproduct();
  }
}
