import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthData } from '../auth-data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-manager-sign-up',
  templateUrl: './manager-sign-up.component.html',
  styleUrls: ['./manager-sign-up.component.css'],
})
export class ManagerSignUpComponent implements OnInit {
  profileimage: any;
  isauthenticated: boolean;
  ngOnInit(): void {}
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.profileimage = file;
    }
  }

  onSavePost(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      return;
    }
    let data = new FormData();
    data.append('profileimage', this.profileimage);
    const authData = {
      firstName: form.value.firstName,
      email: form.value.email,
      password: form.value.password,
      gender: form.value.gender,
      contact: form.value.contact,
    };
    data.append('body', JSON.stringify(authData));
    this.authService.registerManager(data).subscribe(
      () => {
        alert('signedUp');
        this.isauthenticated = true;
        this.authService.router.navigate(['/Login']);
      },
      (error) => {
        alert('error');
      }
    );
  }
}
