import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSignUpComponent } from './manager-sign-up.component';

describe('ManagerSignUpComponent', () => {
  let component: ManagerSignUpComponent;
  let fixture: ComponentFixture<ManagerSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
