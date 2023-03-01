import React from 'react'
import styled from 'styled-components'
import { MdDone } from 'react-icons/md';
import { FiXCircle } from "react-icons/fi";
import './TodoItem.css'
import TodoEdit from './TodoEdit';




const Remove = styled.div`
  width: 25px;
  color: #CCD0D9;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  font-size: 25px;
`

const CheckCircle = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 16px;
  margin-right: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const TodoItemBlock = styled.div`
height: 540px;
`

function TodoItem({ todo, setTodo }) {
  const removeBtn = (id) => {
    setTodo(todo.filter(item => item.id !== id))
  }

  const isdone = (id) => {
    setTodo(todo.map(item => item.id === id ? { ...item, done: !item.done } : item))
  }



  return (
    <TodoItemBlock>
      {
        todo.map((item) =>
          <div key={item.id} className='list'>
            <div className='content'>
              <CheckCircle className={item.done ? 'working' : 'done'} onClick={() => isdone(item.id)}><MdDone /></CheckCircle>
              <TodoEdit todo={todo} setTodo={setTodo} item={item} />
            </div>
            <div className='editdelete'>
              <Remove onClick={() => removeBtn(item.id)}>
                <FiXCircle />
              </Remove>
            </div>

          </div>
        )}
    </TodoItemBlock>
  )
}

export default TodoItem