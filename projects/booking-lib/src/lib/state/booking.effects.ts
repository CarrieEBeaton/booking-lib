import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as bookingActions from '../state/booking.actions';
import { Booking } from './booking';
import { of } from 'rxjs';
import { BookingLibService } from '../booking-lib.service';

@Injectable()
export class BookingEffects {

    constructor(private actions$: Actions,
        private bookingService: BookingLibService) { }

    @Effect()
    loadBookings$ = this.actions$.pipe(
        ofType(bookingActions.BookingActionTypes.LoadBookings),
        mergeMap((action: bookingActions.LoadBookings) => this.bookingService.getBookings().pipe(
            map((bookings: Booking[]) => (new bookingActions.LoadBookingsSuccess(bookings))),
            catchError(err => of(new bookingActions.LoadBookingsFail(err)))
        )));

        @Effect()
        updateBooking$ = this.actions$.pipe(
            ofType(bookingActions.BookingActionTypes.UpdateBooking),
            map((action: bookingActions.UpdateBooking) => action.payload),
            mergeMap((booking: Booking) =>
                this.bookingService.updateBooking(booking).pipe(
                map((updatedBooking: Booking) => (new bookingActions.UpdateBookingSuccess(updatedBooking))),
                catchError(err => of(new bookingActions.UpdateBookingFail(err)))
            )));

            @Effect()
            createBooking$ = this.actions$.pipe(
                ofType(bookingActions.BookingActionTypes.CreateBooking),
                map((action: bookingActions.CreateBooking) => action.payload),
                mergeMap((booking: Booking) =>
                    this.bookingService.createBooking(booking).pipe(
                    map((newBooking: Booking) => (new bookingActions.CreateBookingSuccess(newBooking))),
                    catchError(err => of(new bookingActions.UpdateBookingFail(err)))
                )));

                @Effect()
                deleteBooking$ = this.actions$.pipe(
                    ofType(bookingActions.BookingActionTypes.DeleteBooking),
                    map((action: bookingActions.DeleteBooking) => action.payload),
                    mergeMap((bookingId: number) =>
                        this.bookingService.deleteBooking(bookingId).pipe(
                        map(() => (new bookingActions.DeleteBookingSuccess(bookingId))),
                        catchError(err => of(new bookingActions.UpdateBookingFail(err)))
                    )));
}
