import { Component } from '@angular/core';
import { ParcsListComponent } from './parcs-list/parcs-list.component';
import { ParcsAddComponent } from './parcs-add/parcs-add.component';

@Component({
  selector: 'app-parcs',
  standalone: true,
  imports: [ParcsListComponent, ParcsAddComponent],
  templateUrl: './parcs.component.html',
  styleUrl: './parcs.component.css'
})
export class ParcsComponent {

}
