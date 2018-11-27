import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Booking } from '../../state/booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html'
})
export class BookingListComponent {

  pageTitle = 'Bookings';

  @Input() errorMessage: string;
  @Input() bookings: Booking[];
  @Input() selectedBooking: Booking;
  @Output() initializeNewBooking = new EventEmitter<void>();
  @Output() selected = new EventEmitter<Booking>();

  bookingSelected(booking: Booking): void {
    this.selected.emit(booking);
  }

  newBooking(): void {
    this.initializeNewBooking.emit();
  }
}
