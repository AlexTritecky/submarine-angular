import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileServicesComponent } from './mobile-services.component';

describe('MobileServicesComponent', () => {
	let component: MobileServicesComponent;
	let fixture: ComponentFixture<MobileServicesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MobileServicesComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MobileServicesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
