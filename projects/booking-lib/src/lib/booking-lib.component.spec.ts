import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingLibComponent } from './booking-lib.component';

describe('BookingAppComponent', () => {
  let component: BookingLibComponent;
  let fixture: ComponentFixture<BookingLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
