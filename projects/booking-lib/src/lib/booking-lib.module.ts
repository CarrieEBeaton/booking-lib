import { NgModule } from '@angular/core';
import { BookingLibComponent } from './booking-lib.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BookingContainerComponent } from './containers/booking-container/booking-container.component';
import { bookingReducer } from './state/booking.reducer';
import { BookingEffects } from './state/booking.effects';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { BookingListComponent } from './components/booking-list/booking-list.component';

const bookingRoutes: Routes = [
  { path: '', component: BookingContainerComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(bookingRoutes),
    StoreModule.forFeature('bookings', bookingReducer),
    EffectsModule.forFeature([BookingEffects]),
  ],
  declarations: [
    BookingLibComponent,
    BookingContainerComponent,
    BookingListComponent,
    BookingEditComponent],
  exports: [BookingLibComponent]
})
export class BookingLibModule { }
