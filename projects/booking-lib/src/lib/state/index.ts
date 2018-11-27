import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingState } from './booking.state';

// Selector functions
const getBookingFeatureState = createFeatureSelector<BookingState>('bookings');

export const getBookings = createSelector(
    getBookingFeatureState,
    state => state.bookings
);

export const getError = createSelector(
    getBookingFeatureState,
    state => state.error
);

export const getCurrentBookingId = createSelector(
    getBookingFeatureState,
    state => state.currentBookingId
);

export const getCurrentBooking = createSelector(
    getBookingFeatureState,
    getCurrentBookingId,
    (state, currentBookingId) => {
        if (currentBookingId === 0) {
            return {
                id: 0,
                name: '',
                guests: 0,
                guestrooms: 0,
                nights: 0,
            };
        } else {
            return currentBookingId ? state.bookings.find(booking => booking.id === currentBookingId) : null;
        }
    }
);
