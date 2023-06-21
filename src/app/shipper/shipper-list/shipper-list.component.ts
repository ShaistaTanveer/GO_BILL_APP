import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/manager/auth.service';
import { Shipper } from '../shipper.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css'],
})
export class ShipperListComponent implements OnInit, OnDestroy {
  isshowshipper: any;
  activemanager = false;
  shipperList: any;
  public shippers: Shipper[] = [];
  activeshipper: any;
  isactivemanager: any;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.activemanager = this.authService.getActiveManager();
    this.isshowshipper = this.authService.getshipperId();
    this.fetchData();
  }

  fetchData() {
    this.authService.getshippers().subscribe((response: any) => {
      const token = response.token;
      this.activeshipper = response.id;
      this.isactivemanager = false;
      this.shipperList = response.shipperList;
      return { shipperList: response.shipperList };
    });
  }
  onDelete(id: string) {
    this.authService.deleteShipper(id).subscribe(() => {
      alert('deleted');
      this.fetchData();
    });
  }

  onEdit(id: string) {}

  ngOnDestroy() {}
}
