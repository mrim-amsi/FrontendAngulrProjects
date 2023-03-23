import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-inpout',
  templateUrl: './username-inpout.component.html',
  styleUrls: ['./username-inpout.component.css']
})
export class UsernameInpoutComponent implements OnInit {
  textValue='';
  disableEl=true ;
  constructor() { }
 
  ngOnInit(): void {
  }
  isEmpty(){
    // const target =event.target as HTMLInputElement;
      if (this.textValue){
        return true;
      }
      return false;
      // this.disableEl= this.textValue==""?true:false;
      //  return this.disableEl;
  }
          reset(){
            this.textValue="";
          }
        }
