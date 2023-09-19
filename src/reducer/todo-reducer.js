import { v4 as uuidv4 } from 'uuid';

export default function todoReducer(todos, action) {
  switch (action.type) {
    case 'initialize': {
      const { todos } = action;
      return todos;
    }
    case 'add': {
      const { todo } = action
      const newTodoItem = {
        key: uuidv4(),
        context: todo,
        status: 'active',
      };
      const result = [...todos, newTodoItem];

      localStorage.setItem('todos', JSON.stringify(result));
      return result;
    }
    case 'update': {
      const { updated } = action
      const result = todos.map((todo) => todo.key === updated.key ? updated : todo);

      localStorage.setItem('todos', JSON.stringify(result));
      return result;
    }
    case 'delete': {
      const { deleted } = action
      const result = todos.filter((todo) => todo.key !== deleted.key);

      localStorage.setItem('todos', JSON.stringify(result))
      return result;
    }
    default: {
      throw Error(`알 수 없는 액션 타입입니다: ${action.type}`)
    }
  }
}