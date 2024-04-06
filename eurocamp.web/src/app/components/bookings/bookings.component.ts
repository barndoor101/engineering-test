import { Component } from '@angular/core';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { BookingsAddComponent } from './bookings-add/bookings-add.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [BookingsListComponent, BookingsAddComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

}
