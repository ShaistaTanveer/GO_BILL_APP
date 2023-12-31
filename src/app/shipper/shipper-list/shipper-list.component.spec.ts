import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperListComponent } from './shipper-list.component';

describe('ShipperListComponent', () => {
  let component: ShipperListComponent;
  let fixture: ComponentFixture<ShipperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
