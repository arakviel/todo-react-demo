import { useState } from 'react'
import Todo from "../Todo/Todo"
import TodoForm from "../TodoForm/TodoForm"

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const insertHandler = (todo) => {
    console.log(`From TodoList: ${todo}`)
    setTodos((prevTodos) => {
      return [...prevTodos, todo]
    })
  }

  return (
    <section className="todos">
      <TodoForm onTodoInsert={insertHandler} />
      <ul className="todos__list">
        {todos.map(
          t => <Todo key={t.todo} item={t} />
        )}
        {todos.length == 0 && <li className="todos__empty">Поки пусто</li>}
      </ul>
      <pre>
        {JSON.stringify(todos)}
      </pre>
    </section>
  )
}

export default TodoList
