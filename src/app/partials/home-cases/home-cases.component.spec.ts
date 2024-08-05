import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCasesComponent } from './home-cases.component';

describe('HomeCasesComponent', () => {
	let component: HomeCasesComponent;
	let fixture: ComponentFixture<HomeCasesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeCasesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeCasesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
