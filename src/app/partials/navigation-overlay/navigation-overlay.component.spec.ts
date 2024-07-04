import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOverlayComponent } from './navigation-overlay.component';

describe('NavigationOverlayComponent', () => {
  let component: NavigationOverlayComponent;
  let fixture: ComponentFixture<NavigationOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
