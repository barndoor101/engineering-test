import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-parcs-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './parcs-list.component.html',
  styleUrl: './parcs-list.component.css'
})
export class ParcsListComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.refreshParcList();
  }

}