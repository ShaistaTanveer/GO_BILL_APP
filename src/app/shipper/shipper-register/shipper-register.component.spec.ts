import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperRegisterComponent } from './shipper-register.component';

describe('ShipperRegisterComponent', () => {
  let component: ShipperRegisterComponent;
  let fixture: ComponentFixture<ShipperRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
