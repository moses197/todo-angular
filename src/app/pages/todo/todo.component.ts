import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/todo.interface';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  constructor(private todoService: TodoService) {}

  newTodo: string = '';
  todos: Todo[] = [];

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe({
      next: (response: any) => {
        // this.todos = response.map((todo: any) => todo.title);
        this.todos = response as Todo[];
      },
      error: (error) => {
        console.error('Error fetching todos:', error);
      }
    });
  }

  addTodo() {
    const trimmedTodo = this.newTodo.trim();

    if (trimmedTodo) {
      this.todoService.createTodo(trimmedTodo).subscribe({
        next: (response: any) => {
          this.todos.push(response);
          this.newTodo = '';
        },
        error: (error) => {
          console.error('Error creating todo:', error);
        }
      })
    }
    // if (this.newTodo.trim()) {
    //   this.todos.push(this.newTodo.trim());
    //   this.newTodo = '';
    // }
  }

  removeTodo(id: number, index: number) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => {
        this.todos.splice(index, 1);
      },
      error: (error) => {
        console.error('Error deleting todo:', error);
      }
    })
  }

startEditing(todo: Todo) {
  todo.originalTitle = todo.title;
  todo.editing = true;
}

saveTodo(todo: Todo) {
  this.todoService.updateTodo(todo.id, { title: todo.title }).subscribe({
    next: (updated: Todo) => {
      todo.editing = false;
    },
    error: (error) => {
      console.error('Error updating todo:', error);
    }
  });
}

cancelEdit(todo: Todo) {
  todo.title = todo.originalTitle ?? todo.title;
  todo.editing = false;
}

}
