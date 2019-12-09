import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public message: string;
  public todo$: Observable<Todo[]> = this.todoService.todos$;

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
  }

  public addTodo(): void {
    this.todoService.addTodo({message:  this.message, done: false});
  }

  public toggleTodo(index: number): void {
    this.todoService.toggleTodo(index);
  }
  public deleteTodo(index: number): void {
    this.todoService.deleteTodo(index);
  }
}
