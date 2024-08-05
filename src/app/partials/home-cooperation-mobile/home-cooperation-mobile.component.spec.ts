import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCooperationMobileComponent } from './home-cooperation-mobile.component';

describe('HomeCooperationMobileComponent', () => {
  let component: HomeCooperationMobileComponent;
  let fixture: ComponentFixture<HomeCooperationMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCooperationMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCooperationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
