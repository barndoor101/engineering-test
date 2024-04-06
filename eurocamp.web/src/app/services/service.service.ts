import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users, Parcs, Bookings } from '../models/models';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  url: string = environment.apiBaseUrl + '/api/1';
  userList: Users[] = [];
  parcList: Parcs[] = [];
  bookingList: Bookings[] = [];

  userFormData: Users = new Users();
  userFormSubmitted: boolean = false;

  constructor(private http: HttpClient) {}

  refreshUserList() {
    return this.http.get(this.url + '/users').subscribe({
      next: (res) => {
        this.userList = Object.values(res)[0] as Users[];
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  addUser(  ) {
    return this.http.post(this.url + '/users/', '');
  }

  deleteUser( id: string ) {
    return this.http.delete(this.url + '/users/' + id);
  }

  refreshParcList() {
    return this.http.get(this.url + '/parcs').subscribe({
      next: (res) => {
        this.parcList = Object.values(res)[0] as Parcs[];
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  addParc(  ) {
    return this.http.post(this.url + '/parcs/', '');
  }

  deleteParc( id: string ) {
    return this.http.delete(this.url + '/parcs/' + id);
  }

  refreshBookingList() {
    return this.http.get(this.url + '/bookings').subscribe({
      next: (res) => {
        this.bookingList = Object.values(res)[0] as Bookings[];
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  addBooking(  ) {
    return this.http.post(this.url + '/bookings/', '');
  }

  deleteBooking( id: string ) {
    return this.http.delete(this.url + '/bookings/' + id);
  }

  convertDate(date: any) {
    return moment(date).format('L');
  }

  lookupUser(guid: string) {
    return guid;
  }

}
