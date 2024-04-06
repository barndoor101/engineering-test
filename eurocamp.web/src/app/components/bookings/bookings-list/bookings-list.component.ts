import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bookings-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './bookings-list.component.html',
  styleUrl: './bookings-list.component.css'
})
export class BookingsListComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.refreshBookingList();
  }

}