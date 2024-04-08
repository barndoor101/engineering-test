import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Users, Parcs, Bookings } from '../models/models';
import moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  url: string = environment.apiBaseUrl + '/api/1';
  userList: Users[] = [];
  parcList: Parcs[] = [];
  bookingList: Bookings[] = [];

  userFormData: Users = new Users();
  parcFormData: Parcs = new Parcs();
  bookingFormData: Bookings = new Bookings();

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  refreshUserList() {
    return this.http.get(this.url + '/users').subscribe({
      next: data => {
        this.userList = Object.values(data)[0] as Users[];
      },
      error: error => {
        this.toastr.error('Error');
      },
    })
  }

  addUser( form: NgForm ) {
    return this.http.post(this.url + '/users/', form.form.value)
      .subscribe({
        next: data => {
          this.toastr.success('User Added');
          this.refreshUserList();
          this.clearForm(form);
        },
        error: error => {
          this.toastr.error('Error');
        }
      });
  }

  deleteUser( id: string ) {
    return this.http.delete(this.url + '/users/' + id)
      .subscribe({
        next: data => {
          this.toastr.success('User Deleted');
          this.refreshUserList();
        },
        error: error => {
          this.toastr.error('Error');
        }
      });
  }

  refreshParcList() {
    return this.http.get(this.url + '/parcs')
    .subscribe({
      next: data => {
        this.parcList = Object.values(data)[0] as Parcs[];
      },
      error: error => {
        this.toastr.error('Error');
      },
    })
  }

  addParc( form: NgForm ) {
    return this.http.post(this.url + '/parcs/', form.form.value)
      .subscribe({
        next: data => {
          this.toastr.success('Parc Added');
          this.refreshParcList();
          this.clearForm(form);
        },
        error: error => {
          this.toastr.error('Error');
        }
      });
  }

  deleteParc( id: string ) {
    return this.http.delete(this.url + '/parcs/' + id)
      .subscribe({
        next: data => {
          this.toastr.success('Parc Deleted');
          this.refreshParcList();
        },
        error: error => {
          this.toastr.error('Error');
        }
      });
  }

  refreshBookingList() {
    return this.http.get(this.url + '/bookings')
    .subscribe({
      next: data => {
        this.bookingList = Object.values(data)[0] as Bookings[];
      },
      error: error => {
        this.toastr.error('Error');
      },
    })
  }

  addBooking( form: NgForm ) {
    return this.http.post(this.url + '/bookings/', form.form.value)
    .subscribe({
      next: data => {
        this.toastr.success('Booking Added');
        this.refreshBookingList();
        this.clearForm(form);
      },
      error: error => {
        this.toastr.error('Error');
      }
    });
  }

  deleteBooking( id: string ) {
    return this.http.delete(this.url + '/bookings/' + id)
      .subscribe({
        next: data => {
          this.toastr.success('Booking Deleted');
          this.refreshBookingList();
        },
        error: error => {
          this.toastr.error('Error');
        }
      });
  }

  clearForm(form: NgForm) {
    form.reset();
  }

  convertDate( date: any ) {
    return moment(date).format('L');
  }

  lookupUser( id: string ) {
    let user = this.userList.find(user => user.id === id);
    if (user ===  undefined){
      return 'User not found';
    } else {
      return user.name;
    }
  }

  lookupParc( id: string ) {
    let parc = this.parcList.find(parc => parc.id === id);
    if (parc ===  undefined){
      return 'Parc not found';
    } else {
      return parc.name;
    }
  }

}
