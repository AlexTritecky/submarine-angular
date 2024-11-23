import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesGlobalPageComponent } from './cases-global-page.component';

describe('CasesGlobalPageComponent', () => {
  let component: CasesGlobalPageComponent;
  let fixture: ComponentFixture<CasesGlobalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasesGlobalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasesGlobalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
