import styled from 'styled-components'
import { useState } from 'react'
import TodoHead from './TodoHead'
import TodoCreate from './TodoCreate'
import TodoList from './TodoList'
import TodoItem from './TodoItem'

const TodoTemplateBlock = styled.div`
  width: 500px;
  height: 740px;
  background-color: white;
  border-radius: 30px;
  position: relative;
  margin: 50px auto;
`

function TodoTemplate() {
  const INITIAL_STATE = [
    { id: 1, content: 'todo-list 마무리하기', done: true, edit: false },
    { id: 2, content: 'todo-list 마무리하기', done: true, edit: false },
    { id: 3, content: 'todo-list 마무리하기', done: true, edit: false },
  ]
  const [todo, setTodo] = useState(INITIAL_STATE)
  return (
    <div>
      <TodoTemplateBlock>
        <TodoHead todo={todo} />
        <TodoList>
          <TodoItem todo={todo} setTodo={setTodo} />
        </TodoList>
        <TodoCreate todo={todo} setTodo={setTodo} />
      </TodoTemplateBlock>
    </div>
  )
}

export default TodoTemplate