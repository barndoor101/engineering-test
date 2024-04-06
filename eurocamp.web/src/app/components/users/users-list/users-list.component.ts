import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  constructor(
    public appService: AppService
  ) {}

  ngOnInit(): void {
    this.appService.refreshUserList();
  }

}
