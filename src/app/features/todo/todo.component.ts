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
    <app-todo-item
      *ngFor="let toDo of toDoItems$ | async"
      [toDo]="toDo"
    ></app-todo-item>
  `,
  styles: [],
})
export class TodoComponent {
  constructor(private readonly todoService: TodoService) {}

  toDoItems$: Observable<Todo[]> = this.todoService.getTodos();
}
