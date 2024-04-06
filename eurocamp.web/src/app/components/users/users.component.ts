import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UsersAddEditComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
