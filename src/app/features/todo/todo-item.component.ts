import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <input
      type="checkbox"
      id="{{ toDo.id }}"
      name="{{ toDo.id }}"
      value="true"
      [(ngModel)]="toDo.completed"
    />
    <label for="{{ toDo.id }}" [ngClass]="{ completed: toDo.completed }"
      >{{ toDo.description }} - Created On: {{ toDo.date }}</label
    ><br />
  `,
  styles: [
    `
      .completed {
        text-decoration: line-through;
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input() toDo!: Todo;
}
