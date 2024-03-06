import { action, observable } from 'mobx';

const TodoListStore = observable({
  todos: [
    {
      task: 'newTodo',
      completed: false,
      assignee: null,
    },
  ],

  addTodo: action(function (newTodo) {
    this.todos.push({
      task: newTodo,
      completed: false,
      assignee: null,
    });
  }),
  completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  },
  report() {
    if (this.todos.length === 0) return '<none>';
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : '<none>'}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  },
  removeTodo(id) {
    const index = this.todos.findIndex((v) => v.id === id);
    if (id !== -1) {
      this.todos.splice(index, 1);
    }
  },
});

export default TodoListStore;
