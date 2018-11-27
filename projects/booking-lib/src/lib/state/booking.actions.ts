import { Action } from '@ngrx/store';
import { Booking } from './booking';

export enum BookingActionTypes {
    SetCurrentBooking = '[Booking] Set Current Booking',
    InitializeCurrentBooking = '[Booking] Initialize Current Booking',
    LoadBookings = '[Booking] Load all Bookings',
    LoadBookingsSuccess = '[Booking] Load Bookings Success',
    LoadBookingsFail = '[Booking] Load Bookings Fail',
    UpdateBooking = '[Booking] Update Booking',
    UpdateBookingSuccess = '[Booking] Update Booking Success',
    UpdateBookingFail = '[Booking] Update Booking Fail',
    CreateBooking = '[Booking] Create Booking',
    CreateBookingSuccess = '[Booking] Create Booking Success',
    CreateBookingFail = '[Booking] Create Booking Fail',
    DeleteBooking = '[Booking] Delete Booking',
    DeleteBookingSuccess = '[Booking] Delete Booking Success',
    DeleteBookingFail = '[Booking] Delete Booking Fail',
    ClearCurrentBooking = '[Booking] Clear Current Booking'
}

export class SetCurrentBooking implements Action {
    readonly type = BookingActionTypes.SetCurrentBooking;

    constructor(public payload: Booking) {}
}

export class LoadBookings implements Action {
    readonly type = BookingActionTypes.LoadBookings;
}

export class LoadBookingsSuccess implements Action {
    readonly type = BookingActionTypes.LoadBookingsSuccess;

    constructor(public payload: Booking[]) {}
}

export class LoadBookingsFail implements Action {
    readonly type = BookingActionTypes.LoadBookingsFail;

    constructor(public payload: string) {}
}

export class UpdateBooking implements Action {
    readonly type = BookingActionTypes.UpdateBooking;

    constructor(public payload: Booking) {}
}

export class UpdateBookingSuccess implements Action {
    readonly type = BookingActionTypes.UpdateBookingSuccess;

    constructor(public payload: Booking) {}
}

export class UpdateBookingFail implements Action {
    readonly type = BookingActionTypes.UpdateBookingFail;

    constructor(public payload: string) {}
}

export class CreateBooking implements Action {
    readonly type = BookingActionTypes.CreateBooking;

    constructor(public payload: Booking) {}
}

export class CreateBookingSuccess implements Action {
    readonly type = BookingActionTypes.CreateBookingSuccess;

    constructor(public payload: Booking) {}
}

export class CreateBookingFail implements Action {
    readonly type = BookingActionTypes.CreateBookingFail;

    constructor(public payload: string) {}
}

export class DeleteBooking implements Action {
    readonly type = BookingActionTypes.DeleteBooking;

    constructor(public payload: number) {}
}

export class DeleteBookingSuccess implements Action {
    readonly type = BookingActionTypes.DeleteBookingSuccess;

    constructor(public payload: number) {}
}

export class DeleteBookingFail implements Action {
    readonly type = BookingActionTypes.DeleteBookingFail;

    constructor(public payload: string) {}
}

export class InitializeCurrentBooking implements Action {
    readonly type = BookingActionTypes.InitializeCurrentBooking;
}

export class ClearCurrentBooking implements Action {
    readonly type = BookingActionTypes.ClearCurrentBooking;
}

export type BookingActions = SetCurrentBooking
    | InitializeCurrentBooking
    | LoadBookings
    | LoadBookingsSuccess
    | LoadBookingsFail
    | UpdateBooking
    | UpdateBookingSuccess
    | UpdateBookingFail
    | CreateBooking
    | CreateBookingSuccess
    | CreateBookingFail
    | DeleteBooking
    | DeleteBookingSuccess
    | DeleteBookingFail
    | ClearCurrentBooking;
