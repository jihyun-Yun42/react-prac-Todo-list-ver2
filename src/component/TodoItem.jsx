import React, { useState } from 'react'
import styled from 'styled-components'
import { MdDone } from 'react-icons/md';
import { FiXCircle, FiEdit2 } from "react-icons/fi";
import './TodoItem.css'




const Remove = styled.div`
  width: 25px;
  color: #CCD0D9;
  cursor: pointer;
  display: flex;
  display: none;
  justify-content: flex-end;
  align-items: center;
  font-size: 25px;
`
const Edit = styled.div`
  width: 25px;
  color: #CCD0D9;
  cursor: pointer;
  display: flex;
  display: none;
  justify-content: flex-end;
  align-items: center;
  font-size: 23px;
  margin-right: 7px
  
`
const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 24px;
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
.list:hover {
  ${Remove} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  ${Edit} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
`

function TodoItem({ todo, setTodo }) {
  const [text, setText] = useState('');
  const removeBtn = (id) => {
    setTodo(todo.filter(item => item.id !== id))
  }
  const editBtn = (id) => {
    setTodo(todo.map(item => item.id === id ? { ...item, edit: !item.edit } : item))
    setText(todo.find(item => item.id === id).content)
  }
  const isdone = (id) => {
    setTodo(todo.map(item => item.id === id ? { ...item, done: !item.done } : item))
  }
  const edit = (id, e) => {
    e.preventDefault()
    setTodo(todo.map(item => item.id === id ? { ...item, content: text, edit: !item.edit } : item))
  }


  return (
    <TodoItemBlock>
      {
        todo.map((item) =>
          <div key={item.id} className='list'>
            <div className='content'>
              <CheckCircle className={item.done ? 'working' : 'done'} onClick={() => isdone(item.id)}><MdDone /></CheckCircle>
              {
                item.edit ?
                  <form onSubmit={(event) => edit(item.id, event)}>
                    <input value={text} type="text" onChange={(event) => setText(event.target.value)} />
                  </form>
                  : <Text className={item.done ? 'workingText' : 'doneText'}>{item.content}</Text>
              }
            </div>
            <div className='editdelete'>
              <Edit onClick={() => editBtn(item.id)}>
                <FiEdit2 />
              </Edit>
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