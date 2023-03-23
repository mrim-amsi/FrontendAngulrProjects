import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-successalert',
  templateUrl: './successalert.component.html',
  styleUrls: ['./successalert.component.css']
})
export class SuccessalertComponent implements OnInit {
  @Input() type!: string;
  @Output() onClose =new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  close(){
    this.onClose.emit();
   }
}
