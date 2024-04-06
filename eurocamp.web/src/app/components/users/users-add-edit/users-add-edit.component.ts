import { Component } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users-add-edit',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './users-add-edit.component.html',
  styleUrl: './users-add-edit.component.css'
})
export class UsersAddEditComponent {
    constructor(public appService: AppService) {}

    onSubmit(form: NgForm) {
      this.appService.userFormSubmitted = true;
      if (this.appService.userFormData.id == 0) {
        this.insertRecord(form);
      } else {
        this.updateRecord(form);
      }
      
    }
}
