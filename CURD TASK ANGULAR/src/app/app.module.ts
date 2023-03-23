import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [AppComponent, TodoElementComponent, TodoFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
