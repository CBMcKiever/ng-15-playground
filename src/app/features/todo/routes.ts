import { Route } from '@angular/router';
import { TodoComponent } from './todo.component';

export const TODO_ROUTES: Route[] = [
  { path: '', component: TodoComponent },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./todo-detail.component').then((mod) => mod.TodoDetailComponent),
  },
];
