import { useId, useState } from 'react'
import style from './TodoForm.module.scss'

const TodoForm = ({ onTodoInsert }) => {
  const todoInputId = useId()
  const statusSelectId = useId()
  const [todo, setTodo] = useState('')
  const [todoError, setTodoError] = useState(false)
  const [status, setStatus] = useState('new')

  const todoHandler = (e) => {
    console.log('test')
    setTodo(e.target.value)
    if (todo.length < 3) {
      setTodoError(true)
    } else {
      setTodoError(false)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (todo.length > 3) {
      return;
    }

    const result = {
      todo,
      status,
    }

    onTodoInsert(result)

    setTodo('')
    setStatus('new')
  }

  return (
    <form className={style['todo-form']} onSubmit={submitHandler}>

      <label className={style['todo-form__label']} htmlFor={todoInputId}>Задача: </label>
      <input className={(todoError && 'invalid')} id={todoInputId} type="text" name="todo" value={todo} onChange={todoHandler} />
      <small className={(!todoError && 'todo-form__small')} >Повинен бути більше 3 символів</small>

      <label className={style['todo-form__label']} htmlFor={statusSelectId} >Статус: </label>
      <select className={style.todoFormSelect} name="status" id={statusSelectId} value={status} onChange={e => setStatus(e.target.value)}>
        <option value="new">Нове</option>
        <option value="onProgress">В процесі</option>
        <option value="completed">Виконано</option>
      </select>
      <input className={style.todoFormSubmit} type="submit" value="Додати" />
    </form>
  )
}

export default TodoForm
