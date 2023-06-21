import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css'],
})
export class CustomerSignupComponent implements OnInit {
  public mode = 'create';
  private cid: any;
  updatedCustomer: any;
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('cid')) {
        this.mode = 'edit';
        this.cid = paramMap.get('cid');
        this.updatedCustomer = this.authService
          .getCustomerbyId(this.cid)
          .subscribe((response: any) => {
            const myupdatedCustomer = response.updatedCustomer;
            this.updatedCustomer = {
              customerId: myupdatedCustomer.customerId,
              customerName: myupdatedCustomer.customerName,
              email: myupdatedCustomer.email,
              gender: myupdatedCustomer.gender,
              contact: myupdatedCustomer.contact,
            };
          });
      } else {
        this.mode = 'create';
        this.cid = null;
      }
    });
  }
  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = {
      customerName: form.value.customerName,
      email: form.value.email,
      gender: form.value.gender,
      contact: form.value.contact,
    };
    if (this.mode === 'create') {
      this.authService.registerCustomer(authData).subscribe(
        (response) => {
          alert('customer Registered!');
          this.authService.router.navigate(['/managerRights']);
        },
        (error): void => {
          alert('Error: register Failed!');
        }
      );
    } else if (this.mode === 'edit') {
      this.authService
        .updateCustomer(this.cid, authData)
        .subscribe((response) => {
          alert('updated');
          this.authService.router.navigate(['/managerRights']);
        });
    }
  }
}
