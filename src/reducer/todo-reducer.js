import { v4 as uuidv4 } from 'uuid';

export default function todoReducer(todos, action) {
  switch (action.type) {
    case 'add': {
      const { newTodo } = action
      if (newTodo === '') {
        return;
      }
      const newTodoItem = {
        key: uuidv4(),
        context: newTodo,
        checked: false,
      };
      return [...todos, newTodoItem];
    }
    case 'check': {
      const { key } = action
      return todos.map((todo) => todo.key === key ? { ...todo, checked: !todo.cheked } : todo);
    }
    case 'delete': {
      const { itemKey } = action
      return todos.filter((todo) => todo.key !== itemKey);
    }
    case 'all': {
      return todos;
  }
    case 'active': {
      return todos.filter((todo) => todo.checked);
    }
    case 'completed': {
      return todos.filter((todo) => !todo.checked);
    }
    default: {
      throw Error(`알 수 없는 액션 타입입니다: ${action.type}`)
    }
  }
}