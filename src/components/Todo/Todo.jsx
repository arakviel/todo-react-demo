import style from './Todo.module.scss'

const Todo = ({ item }) => {
  return (
    <li className={style.item}>
      {item.todo}
      <span className={style.status} data-status={item.status}>{item.status}</span>
    </li>
  )
}

export default Todo
