// import { Component, Input, OnInit } from '@angular/core';
import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-element',
  templateUrl: './todo-element.component.html',
  styleUrls: ['./todo-element.component.css'],
})
export class TodoElementComponent implements OnInit {
  disableEl=false;
  textValue!: string;
  textcontent!: string;
  

  @Output() remove: EventEmitter<{ title: string; content: string }> = new EventEmitter<{ title: string; content: string }>();

  constructor() {}

  @Input() task: { isImportant: boolean,title: string; content: string } = {
    isImportant: false,
    title: '',
    content: '',
  };

  isImportant= this.task.isImportant;

  ngOnInit(): void {}
  onRemoveTask(){
    this.remove.emit(this.task);
    console.log("onRemoveTask");

  }
  editTask(){
    this.disableEl=!this.disableEl

    let title = this.task.title;
    let content = this.task.content;
    this.textValue=title;
    this.textcontent=content;    
  }
  doneEditTask(){
    // let result = prompt("Edit Task Title", title);
    this.task.title =  this.textValue;
    this.task.content = this.textcontent;
    this.disableEl=!this.disableEl
  }

}
