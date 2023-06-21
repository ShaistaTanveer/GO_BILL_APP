import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/manager/auth.service';

@Component({
  selector: 'app-shippper-login',
  templateUrl: './shippper-login.component.html',
  styleUrls: ['./shippper-login.component.css'],
})
export class ShippperLoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = { email: form.value.email, password: form.value.password };
    this.authService.shipperlogin(authData).subscribe(
      (response) => {
        console.log(response.id);
        const token = response.token;
        const id = response.id;
        this.authService.activeshipper = response.id;
        this.authService.isactiveshipper = true;
        this.authService.isactivecustomer = false;
        this.authService.isactivemanager = false;
        this.authService.ispublic = false;
        this.authService.saveAuth(token, id);
        alert('Logged In!');
        this.authService.router.navigate(['/shipperRights']);
      },
      (error): void => {
        alert('Error: Login Failed!');
      }
    );
  }
}
