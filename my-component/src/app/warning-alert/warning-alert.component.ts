import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  @Input() type!: string;
  @Output() onClose =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.onClose.emit();
   }
}
