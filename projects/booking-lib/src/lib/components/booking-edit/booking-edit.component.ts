import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../../state/booking';
import { GenericValidator } from '../../shared/generic-validator';
@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html'
})
export class BookingEditComponent implements OnInit, OnChanges {
  pageTitle = 'Booking Edit';

  @Input() errorMessage: string;
  @Input() selectedBooking: Booking;
  @Output() create = new EventEmitter<Booking>();
  @Output() update = new EventEmitter<Booking>();
  @Output() delete = new EventEmitter<Booking>();
  @Output() clearCurrent = new EventEmitter<void>();

  bookingForm: FormGroup;

  booking: Booking | null;

  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder) {

    this.validationMessages = {
      name: {
        required: 'Booking name is required.',
        minlength: 'Booking name must be at least three characters.',
        maxlength: 'Booking name cannot exceed 50 characters.'
      },
      guests: {
        required: 'Guest is required.'
      },
      guestrooms: {
        required: 'Guestrooms is required.'
      },
      nights: {
        required: 'Nights is required.'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.setUpForm();

    this.bookingForm.valueChanges.subscribe(
      value => this.displayMessage = this.genericValidator.processMessages(this.bookingForm)
    );
  }

  setUpForm() {
    this.bookingForm = this.fb.group({
      name: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(50)]],
      guests: ['', Validators.required],
      guestrooms: ['', Validators.required],
      nights: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

    // patch form with value from the store
    this.setUpForm();
    if (changes.selectedBooking) {
      const booking: any = changes.selectedBooking.currentValue as Booking;
      this.displayBooking(booking);
    }
  }

  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.bookingForm);
  }

  displayBooking(booking: Booking | null): void {
    this.booking = booking;

    if (this.booking && this.booking !== undefined) {
      this.bookingForm.reset();

      if (this.booking.id === 0) {
        this.pageTitle = 'Add Booking';
      } else {
        this.pageTitle = `Edit Booking: ${this.booking.name}`;
      }

      this.bookingForm.patchValue({
        name: this.booking.name,
        guests: this.booking.guests,
        guestrooms: this.booking.guestrooms,
        nights: this.booking.nights
      });
    }
  }

  cancelEdit(): void {
    this.displayBooking(this.booking);
  }

  closeForm(): void {
    this.booking = null;
  }

  deleteBooking(): void {
    if (this.booking && this.booking.id) {
      if (confirm(`Really delete the booking: ${this.booking.name}?`)) {
        this.delete.emit(this.booking);
      }
    } else {
      this.clearCurrent.emit();
    }
  }

  saveBooking(): void {
    if (this.bookingForm.valid) {
      if (this.bookingForm.dirty) {
        // Ensures values not on the form, such as the Id are retained with deep copy
        const b = { ...this.booking, ...this.bookingForm.value };

        if (b.id === 0) {
          this.create.emit(b);
        } else {
          this.update.emit(b);
        }
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

}
