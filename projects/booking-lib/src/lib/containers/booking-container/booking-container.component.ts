import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Booking } from '../../state/booking';
import * as fromBooking from '../../state';
import * as bookingActions from '../../state/booking.actions';
import { BookingState } from '../../state/booking.state';

@Component({
  selector: 'amadeus-booking-container',
  templateUrl: './booking-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookingContainerComponent implements OnInit {

  selectedBooking$: Observable<Booking>;
  errorMessage$: Observable<string>;
  bookings$: Observable<Booking[]>;

  constructor(private store: Store<BookingState>) {}

  ngOnInit(): void {
    this.store.dispatch(new bookingActions.LoadBookings());
    this.bookings$ = this.store.pipe(select(fromBooking.getBookings)) as Observable<Booking[]>;
    this.errorMessage$ = this.store.pipe(select(fromBooking.getError)) as Observable<string>;
    this.selectedBooking$ = this.store.pipe(select(fromBooking.getCurrentBooking)) as Observable<Booking>;
  }

  bookingSelected(booking: Booking): void {
    this.store.dispatch(new bookingActions.SetCurrentBooking(booking));
  }

  newBooking(): void {
    this.store.dispatch(new bookingActions.InitializeCurrentBooking());
  }

  deleteBooking(booking: Booking): void {
    this.store.dispatch(new bookingActions.DeleteBooking(booking.id));
  }

  clearBooking(): void {
    this.store.dispatch(new bookingActions.ClearCurrentBooking());
  }

  saveBooking(booking: Booking): void {
    this.store.dispatch(new bookingActions.CreateBooking(booking));
  }

  updateBooking(booking: Booking): void {
   this.store.dispatch(new bookingActions.UpdateBooking(booking));
  }
}
