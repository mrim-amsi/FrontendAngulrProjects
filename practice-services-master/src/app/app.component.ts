import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UsersService]
})
export class AppComponent {
  constructor(public UsersService:UsersService) {}

  title = 'Practice Services and Depenedancy Injection';
  // activeUsers = ['Mohammed', 'Reem'];
  // inactiveUsers = ['Omran', 'Abdallah'];

 

  
}
