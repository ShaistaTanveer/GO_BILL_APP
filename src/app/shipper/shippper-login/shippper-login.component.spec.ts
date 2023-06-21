import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippperLoginComponent } from './shippper-login.component';

describe('ShippperLoginComponent', () => {
  let component: ShippperLoginComponent;
  let fixture: ComponentFixture<ShippperLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippperLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippperLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
