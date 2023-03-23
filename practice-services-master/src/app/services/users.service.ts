import { Injectable , Input, Output, OnInit, EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
 export class UsersService {

  public activeUsers = ['Mohammed', 'Reem'];
  public inactiveUsers = ['Omran', 'Abdallah'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
