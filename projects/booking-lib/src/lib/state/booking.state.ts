import { Booking } from './booking';

export interface BookingState {
    currentBookingId: number | null;
    bookings: Booking[];
    error: string;
}
