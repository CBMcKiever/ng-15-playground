import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  template: `
    <h1>ToDos</h1>
    <button (click)="addTodo()">New</button>
    <app-todo-item
      class="items"
      *ngFor="let toDo of toDoItems$ | async"
      [toDo]="toDo"
    ></app-todo-item>
  `,
  styles: [
    `
      :host {
        display: block;
        text-align: center;
      }

      .items {
        margin: 0 auto;
      }
    `,
  ],
})
export class TodoComponent {
  constructor(private readonly todoService: TodoService) {}

  toDoItems$: Observable<Todo[]> = this.todoService.getTodos();

  addTodo() {
    this.todoService.addTodo({
      completed: false,
      description: 'This is a test',
      date: new Date().toString(),
    });
  }
}
