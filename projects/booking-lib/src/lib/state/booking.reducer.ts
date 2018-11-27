import { BookingActions, BookingActionTypes } from './booking.actions';
import { BookingState } from './booking.state';

const initialState: BookingState = {
  currentBookingId: null,
  bookings: [],
  error: '',
};

export function bookingReducer(state = initialState, action: BookingActions): BookingState {

  switch (action.type) {

    case BookingActionTypes.SetCurrentBooking:
      return {
        ...state,
        currentBookingId: action.payload.id
      };
    case BookingActionTypes.LoadBookingsSuccess:
      return {
        ...state,
        bookings: action.payload,
        error: ''
      };
    case BookingActionTypes.LoadBookingsFail:
      return {
        ...state,
        bookings: [],
        error: action.payload
      };
    case BookingActionTypes.UpdateBookingSuccess:
      const updatedBookings = state.bookings.map(
        item => action.payload.id === item.id ? action.payload : item);
      return {
        ...state,
        bookings: updatedBookings,
        currentBookingId: action.payload.id,
        error: ''
      };

    case BookingActionTypes.UpdateBookingFail:
      return {
        ...state,
        currentBookingId: null,
        error: action.payload
      };
    case BookingActionTypes.CreateBookingSuccess:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
        currentBookingId: action.payload.id,
        error: ''
      };
    case BookingActionTypes.CreateBookingFail:
      return {
        ...state,
        currentBookingId: null,
        error: action.payload
      };
    case BookingActionTypes.DeleteBookingSuccess:
      return {
        ...state,
        bookings: state.bookings.filter(booking => booking.id !== action.payload),
        currentBookingId: null,
        error: ''
      };

    case BookingActionTypes.DeleteBookingFail:
      return {
        ...state,
        error: action.payload
      };

    case BookingActionTypes.ClearCurrentBooking:
      return {
        ...state,
        currentBookingId: null
      };

    case BookingActionTypes.InitializeCurrentBooking:
      return {
        ...state,
        currentBookingId: 0
      };

    default:
      return state;
  }
}
