import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css'],
})
export class ManagerLoginComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = { email: form.value.email, password: form.value.password };
    this.authService.login(authData).subscribe(
      (response) => {
        const token = response.token;
        const id = response.id;
        const role = response.role;
        console.log(response.token);
        this.authService.saveAuth(token, id);
        alert('Logged In!');
        if (role == 'admin') {
          this.authService.router.navigate(['/managerRights']);
        } else if (role == 'staff') {
          this.authService.router.navigate(['/home']);
        }
      },
      (error): void => {
        alert('Error: Login Failed!');
      }
    );
  }
}
