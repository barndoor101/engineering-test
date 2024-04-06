import { Component } from '@angular/core';
import { ParcsListComponent } from './parcs-list/parcs-list.component';
import { ParcsAddEditComponent } from './parcs-add-edit/parcs-add-edit.component';

@Component({
  selector: 'app-parcs',
  standalone: true,
  imports: [ParcsListComponent, ParcsAddEditComponent],
  templateUrl: './parcs.component.html',
  styleUrl: './parcs.component.css'
})
export class ParcsComponent {

}
