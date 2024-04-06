import { Component } from '@angular/core';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { BookingsAddEditComponent } from './bookings-add-edit/bookings-add-edit.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [BookingsListComponent, BookingsAddEditComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

}
