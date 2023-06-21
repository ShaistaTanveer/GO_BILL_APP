import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/manager/auth.service';
import { PageEvent } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customerList: any;
  totalPosts = 10;
  postsPerPage = 3;
  currentPage = 1;
  pageSizeOptions = [1, 2, 3];
  data: any;
  customerName: any;
  search = new EventEmitter<any>();
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.data = '';
    this.authService
      .getCustomer(this.postsPerPage, this.currentPage, this.data)
      .subscribe((response: any) => {
        console.log(response.customerList);
        this.customerList = response.customerList;
        return { customerList: response.customerList };
      });
  }
  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.postsPerPage = pageData.pageSize;
    this.authService
      .getCustomer(this.postsPerPage, this.currentPage, this.data)
      .subscribe((response: any) => {
        this.customerList = response.customerList;
        return { customerList: response.customerList };
      });
  }
  fetchData() {
    this.authService
      .getCustomer(this.postsPerPage, this.currentPage, this.data)
      .subscribe((response: any) => {
        this.customerList = response.customerList;
        return { customerList: response.customerList };
      });
  }
  onDelete(customerId: string) {
    this.authService.deleteCustomer(customerId).subscribe(() => {
      alert('deleted');
      this.fetchData();
    });
  }
  headerclick(event: any) {
    console.log('clicked header');
    this.data = 'order';
    this.authService
      .getCustomer(this.postsPerPage, this.currentPage, this.data)
      .subscribe((response: any) => {
        this.customerList = response.customerList;
        return { customerList: response.customerList };
      });
  }

  onLogin(form: NgForm) {
    this.search.emit(form);
  }

  searchText() {
    if (this.customerName == '') {
      this.ngOnInit();
    } else {
      this.customerList = this.customerList.filter((res: any) => {
        return res.customerName.toLocaleLowerCase().match(this.customerName);
      });
    }
  }
}
