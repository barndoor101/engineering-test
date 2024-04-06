import { Component } from '@angular/core';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersAddComponent } from './users-add/users-add.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UsersListComponent, UsersAddComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

}
