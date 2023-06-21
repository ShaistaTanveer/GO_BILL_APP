import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';
@Component({
  selector: 'app-shipper-register',
  templateUrl: './shipper-register.component.html',
  styleUrls: ['./shipper-register.component.css'],
})
export class ShipperRegisterComponent implements OnInit {
  private mode = 'create';
  private id: any;
  updatedShipper: any;
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('id')) {
        this.mode = 'edit';
        this.id = paramMap.get('id');
        this.updatedShipper = this.authService
          .getShippersbyId(this.id)
          .subscribe((response: any) => {
            const myupdatedShipper = response.updatedShipper;
            this.updatedShipper = {
              id: myupdatedShipper.id,
              firstName: myupdatedShipper.firstName,
              email: myupdatedShipper.email,
              mobile: myupdatedShipper.mobile,
              password: myupdatedShipper.password,
              gender: myupdatedShipper.gender,
              salary: myupdatedShipper.salary,
              jobstatus: myupdatedShipper.jobstatus,
            };
          });
      } else {
        this.mode = 'create';
        this.id = null;
      }
    });
  }

  onShipperRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let shipper = {
      firstName: form.value.firstName,
      email: form.value.email,
      mobile: form.value.mobile,
      password: form.value.password,
      gender: form.value.gender,
      salary: form.value.salary,
      jobstatus: form.value.jobstatus,
    };
    if (this.mode === 'create') {
      this.authService.shipperRegister(shipper).subscribe(
        (response) => {
          alert('shipper Registered!');
          this.authService.router.navigate(['/managerRights']);
        },
        (error): any => {
          alert('Error: register Failed!');
        }
      );
    } else if (this.mode === 'edit') {
      console.log(this.id);

      this.authService
        .updateShipper(this.id, shipper)
        .subscribe((updatedShipper) => {
          alert('updated');
          this.authService.router.navigate(['/shipperRights']);
        });
    }
  }
}
