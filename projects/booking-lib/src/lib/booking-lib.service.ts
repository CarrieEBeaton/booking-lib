import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Booking } from './state/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingLibService {

  private bookingsUrl = 'api/bookings';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createBooking(booking: Booking): Observable<Booking> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    booking.id = null;
    return this.http.post<Booking>(this.bookingsUrl, booking, { headers: headers })
      .pipe(
        tap(data => console.log('createBooking: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteBooking(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.bookingsUrl}/${id}`;
    return this.http.delete<Booking>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deleteBooking: ' + id)),
        catchError(this.handleError)
      );
  }

  updateBooking(booking: Booking): Observable<Booking> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.bookingsUrl}/${booking.id}`;
    return this.http.put<Booking>(url, booking, { headers: headers })
      .pipe(
        tap(() => console.log('updateBooking: ' + booking.id)),
        // Return the product on an update
        map(() => booking),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
