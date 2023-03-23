import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.css']
})
export class ShowHideComponent implements OnInit {
  disableEl=true ;
  count=0;
   myarry:number[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  showHide(){
    ++this.count;
    this.myarry.push(this.count);
    this.disableEl=!this.disableEl
    return this.disableEl;
  }
  color(){
    if (this.count > 5) {
      return "red";
        }
        return "white";
  }



}
