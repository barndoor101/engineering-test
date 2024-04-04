import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users, Parcs, Bookings } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  url: string = environment.apiBaseUrl + '/';

  constructor(private http: HttpClient) {}

  addUser(  ) {
    return this.http.post(this.url + '/users/', 'name, string');
  }

  deleteUser( id: string ) {
    return this.http.delete(this.url + '/users/' + id);
  }

  addParc(  ) {
    return this.http.post(this.url + '/parcs/', this.formData);
  }

  deleteParc( id: string ) {
    return this.http.delete(this.url + '/parcs/' + id);
  }

  addBooking(  ) {
    return this.http.post(this.url + '/bookings/', this.formData);
  }

  deleteBooking( id: string ) {
    return this.http.delete(this.url + '/bookings/' + id);
  }

}
