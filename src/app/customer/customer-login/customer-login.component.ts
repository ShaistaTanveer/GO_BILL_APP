import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/manager/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
})
export class CustomerLoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = { email: form.value.email, password: form.value.password };
    this.authService.customerlogin(authData).subscribe(
      (response) => {
        console.log(response.id);
        const token = response.token;
        const id = response.id;
        this.authService.saveAuth(token, id);
        this.authService.activecustomer = response.id;
        this.authService.isactivecustomer = true;
        this.authService.isactivemanager = false;
        this.authService.activeshipper = false;
        this.authService.isactiveshipper = false;
        this.authService.ispublic = false;
        alert('Logged In!');
        this.authService.router.navigate(['/listProduct']);
      },
      (error): void => {
        alert('Error: Login Failed!');
      }
    );
  }
}
