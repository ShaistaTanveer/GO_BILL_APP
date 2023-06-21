import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/manager/auth.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  private mode = 'create';
  private pid: any;
  updatedProduct: any;
  constructor(public authService: AuthService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('pid')) {
        this.mode = 'edit';
        this.pid = paramMap.get('pid');
        this.updatedProduct = this.authService
          .getProductsbyId(this.pid)
          .subscribe((response: any) => {
            const myupdatedProduct = response.updatedProduct;
            this.updatedProduct = {
              pid: myupdatedProduct.pid,
              productName: myupdatedProduct.productName,
              category: myupdatedProduct.category,
              price: myupdatedProduct.price,
              stockstatus: myupdatedProduct.stockstatus,
            };
          });
      } else {
        this.mode = 'create';
        this.pid = null;
      }
    });
  }
  onaddProduct(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const authData = {
      productName: form.value.productName,
      category: form.value.category,
      price: form.value.price,
      stockstatus: form.value.stockstatus,
    };
    if (this.mode === 'create') {
      this.authService.addProduct(authData).subscribe(
        () => {
          alert('Product Registered!');
          this.authService.router.navigate(['/managerRights']);
        },
        (error): void => {
          alert('Error: product adding Failed!');
        }
      );
    } else if (this.mode === 'edit') {
      this.authService
        .updateProduct(this.pid, authData)
        .subscribe((response) => {
          alert('updated');
          this.authService.router.navigate(['/managerRights']);
        });
    }
  }
}
