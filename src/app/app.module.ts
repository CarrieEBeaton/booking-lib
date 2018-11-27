import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { BookingLibModule } from 'projects/booking-lib/src/lib/booking-lib.module';
import { HttpClientModule } from '@angular/common/http';
import { BookingData } from './booking-data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookingLibModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BookingData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
