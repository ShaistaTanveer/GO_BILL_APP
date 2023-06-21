import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicRightsComponent } from './public-rights.component';

describe('PublicRightsComponent', () => {
  let component: PublicRightsComponent;
  let fixture: ComponentFixture<PublicRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicRightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
