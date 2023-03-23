import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {
 emailtext='';
  passtext='';
  selecttext='';
  submitted=false;

  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(ngForm:NgForm){
    console.log(ngForm);
    this.emailtext=ngForm.value.email;
    this.passtext=ngForm.value.password;
    this.selecttext=ngForm.value.select;
    this.submitted=true;

  }

}
