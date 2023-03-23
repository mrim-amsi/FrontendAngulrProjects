import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  taskList: { id: number,isImportant: boolean,title: string; content: string }[] = [
    {id: 1,isImportant: true, title: 'Example', content: 'content Example' },
  ];
  count=1;

  constructor() {}

  onAddTaskAdded(todoTask: {isImportant:boolean,title: string; content: string }) {
    console.log(todoTask);
    this.taskList.push({
      id: this.count++,
      isImportant: todoTask.isImportant,
      title: todoTask.title,
      content: todoTask.content,
    });
  }
  onRemoveTask(id: number) {
    console.log("forEach");

    this.taskList.forEach((element,index)=>{

      if(element.id==id)
       this.taskList.splice(index,1);
   });
  }

}
