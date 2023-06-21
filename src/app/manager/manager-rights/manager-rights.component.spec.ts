import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRightsComponent } from './manager-rights.component';

describe('ManagerRightsComponent', () => {
  let component: ManagerRightsComponent;
  let fixture: ComponentFixture<ManagerRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerRightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
