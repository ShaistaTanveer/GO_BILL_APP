import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';
@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
})
export class AddOrderComponent implements OnInit {
  private mode = 'create';
  private orderId: any;

  updatedOrder: any;
  advancePayAmount: number;
  balanceAmount: number;
  total: number;
  Price: number;
  tax = 20;
  // contact: any;
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('orderId')) {
        this.mode = 'edit';
        this.orderId = paramMap.get('orderId');
        this.updatedOrder = this.authService
          .getOrderbyId(this.orderId)
          .subscribe((response: any) => {
            const myupdatedOrder = response.updatedOrder;
            console.log(myupdatedOrder);

            this.updatedOrder = {
              orderId: myupdatedOrder.orderId,
              productName: myupdatedOrder.productName,
              advancePayAmount: myupdatedOrder.advancePayAmount,
              address: myupdatedOrder.address,
              orderDate: myupdatedOrder.orderDate,
              deliveryDate: myupdatedOrder.deliveryDate,
              deliveryStatus: myupdatedOrder.deliveryStatus,
              customerName: myupdatedOrder.customerName,
            };
          });
      } else {
        this.mode = 'create';
        this.orderId = null;
      }
    });
  }
  onaddOrder(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = {
      contact: form.value.contact,
      productName: form.value.productName,
      advancePayAmount: form.value.advancePayAmount,
      address: form.value.address,
      orderDate: form.value.orderDate,
      deliveryDate: form.value.deliveryDate,
      deliveryStatus: form.value.deliveryStatus,
      Price: form.value.Price,
      total: form.value.Price,
      balanceAmount: this.Price - this.advancePayAmount,
      EyeCardDetails: form.value.EyeCardDetails,
    };
    if (this.mode === 'create') {
      this.authService.addOrder(authData).subscribe(
        () => {
          alert('order Registered!');
          this.authService.router.navigate(['/listOrder']);
        },
        (error): void => {
          alert('Error: order adding Failed!');
        }
      );
    } else if (this.mode === 'edit') {
      this.authService
        .updateOrder(this.orderId, authData)
        .subscribe((response) => {
          alert('updated');
        });
    }
  }

  searchText() {}
}
