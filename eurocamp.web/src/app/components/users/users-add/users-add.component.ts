import { Component } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './users-add.component.html',
  styleUrl: './users-add.component.css'
})
export class UsersAddComponent {
    constructor(public appService: AppService) {}

    onSubmit(form: NgForm) {
      this.appService.addUser(form);
    }

}
