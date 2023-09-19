import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeleteButton from './DeleteButton';
import CheckBox from './CheckBox';

export default function Items() {
  const [form, setForm] = useState({ newTodo: '' });
  const [todos, setTodos] = useState(itemExample);

  // uncontrolled component handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }
  
  // form submit시 기본 동작 제거
  // 공백이 있으면 저장하지 않음
  // list의 key값 전달하기 위해 uuid 사용
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = form.newTodo.trim();
    if (newTodo === '') {
      return;
    }
    const newTodoItem = {
      key: uuidv4(),
      context: newTodo,
      checked: false,
    };

    setTodos([...todos, newTodoItem]);
    setForm({ newTodo: '' })
  }

  const toggleTodo = (key) => {
    const updatedTodos = todos.map((todo) => 
      todo.key === key ? { ...todo, checked: !todo.cheked } : todo
    );
    setTodos(updatedTodos);
  }

  return (
    <div>
      <ul>
        {
          todos.map(todo => (
            <li key={todo.key}>
              <CheckBox checkedDefault={todo.cheked} onToggle={() => toggleTodo(todo.key)} />
              {todo.context}
              <DeleteButton todos={todos} setTodos={setTodos} itemKey={todo.key} />
            </li>
          ))
        }
      </ul>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name='newTodo'
          id='newTodo'
          value={form.newTodo}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

// sample data
const itemExample = [
  {
    key: '1',
    context: '첫 번째 투두',
    cheked: false,
  },
  {
    key: '2',
    context: '두 번째 투두',
    cheked: true,
  },
  {
    key: '3',
    context: '세 번째 투두',
    cheked: false,
  },
]
