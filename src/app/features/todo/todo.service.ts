import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Todo } from './todo';

const todoMock: Todo[] = [
  {
    completed: true,
    description: 'Buy groceries',
    date: '2022-05-01',
    id: 1,
  },
  {
    completed: false,
    description: 'Call mom',
    date: '2022-05-02',
    id: 2,
  },
  {
    completed: true,
    description: 'Finish project report',
    date: '2022-05-03',
    id: 3,
  },
  {
    completed: false,
    description: 'Exercise for 30 minutes',
    date: '2022-05-04',
    id: 4,
  },
  {
    completed: true,
    description: 'Book dentist appointment',
    date: '2022-05-05',
    id: 5,
  },
  {
    completed: false,
    description: 'Return library books',
    date: '2022-05-06',
    id: 6,
  },
  {
    completed: true,
    description: 'Pay credit card bill',
    date: '2022-05-07',
    id: 7,
  },
  {
    completed: false,
    description: 'Organize closet',
    date: '2022-05-08',
    id: 8,
  },
  {
    completed: true,
    description: 'Plan weekend trip',
    date: '2022-05-09',
    id: 9,
  },
  {
    completed: false,
    description: 'Write thank you notes',
    date: '2022-05-10',
    id: 10,
  },
  {
    completed: true,
    description: 'Prepare for job interview',
    date: '2022-05-11',
    id: 11,
  },
  {
    completed: false,
    description: 'Buy birthday gift for friend',
    date: '2022-05-12',
    id: 12,
  },
  {
    completed: true,
    description: 'Plan dinner party',
    date: '2022-05-13',
    id: 13,
  },
  {
    completed: false,
    description: 'Clean car',
    date: '2022-05-14',
    id: 14,
  },
  {
    completed: true,
    description: 'Schedule annual check-up',
    date: '2022-05-15',
    id: 15,
  },
  {
    completed: false,
    description: 'Set up new phone',
    date: '2022-05-16',
    id: 16,
  },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject(todoMock);

  getTodos(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  addTodo(toAdd: Todo): void {
    const id = this.todos$.getValue().length + 1;
    const todoList = [...this.todos$.getValue(), { ...toAdd, id }];
    this.todos$.next(todoList);
  }

  deleteTodo(toRemove: Todo): Observable<Todo[]> {
    return of();
  }
}
