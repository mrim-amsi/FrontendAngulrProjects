import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  newTaskTitle = '';
  newTaskContent = '';
  isImportant!: boolean;

  @Output('CustomTaskAdd') onTaskAdd = new EventEmitter<{  isImportant: boolean,title: string; content: string }>();

  constructor() {}

  ngOnInit(): void {}

  onAddTask() {
    this.onTaskAdd.emit({
      isImportant:this.isImportant,
      title: this.newTaskTitle,
      content: this.newTaskContent,
    });
    // this.taskList.push({
    //   title: this.newTaskTitle,
    //   content: this.newTaskContent,
    // });
  }
}
