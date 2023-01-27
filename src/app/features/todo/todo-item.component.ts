import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="item">
      <input
        type="checkbox"
        id="{{ toDo.id }}"
        name="{{ toDo.id }}"
        value="true"
        [(ngModel)]="toDo.completed"
      />
      <label for="{{ toDo.id }}" [ngClass]="{ completed: toDo.completed }">{{
        toDo.description
      }}</label>
      <div class="options">
        <button>?</button>
        <button>X</button>
      </div>
    </div>
  `,
  styles: [
    `
      .item {
        border: 1px solid black;
        border-radius: 5px;
        margin: 1rem;
        text-align: center;
        padding: 1rem;
        max-width: 33%;
        display: flex;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
      }

      .view-more {
        font-size: 2rem;
        font-weight: bold;
        line-height: 0;
      }

      .completed {
        text-decoration: line-through;
      }

      .options button {
        margin: 0.2rem;
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input() toDo!: Todo;
}
