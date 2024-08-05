import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCooperationComponent } from './home-cooperation.component';

describe('HomeCooperationComponent', () => {
	let component: HomeCooperationComponent;
	let fixture: ComponentFixture<HomeCooperationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HomeCooperationComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeCooperationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
