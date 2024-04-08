import { Component } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgForm } from '@angular/forms';
import { Users, Parcs } from '../../../models/models';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bookings-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgFor],
  templateUrl: './bookings-add.component.html',
  styleUrl: './bookings-add.component.css'
})
export class BookingsAddComponent {
  constructor(
    public appService: AppService
  ) {}

  ngOnInit(): void {

  }
}
