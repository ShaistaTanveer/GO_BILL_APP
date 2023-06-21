import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperRightsComponent } from './shipper-rights.component';

describe('ShipperRightsComponent', () => {
  let component: ShipperRightsComponent;
  let fixture: ComponentFixture<ShipperRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipperRightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipperRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
