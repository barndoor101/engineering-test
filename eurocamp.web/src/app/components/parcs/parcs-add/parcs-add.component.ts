import { Component } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgForm } from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parcs-add',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './parcs-add.component.html',
  styleUrl: './parcs-add.component.css'
})
export class ParcsAddComponent {
  constructor(public appService: AppService) {}
}
