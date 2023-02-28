import React from 'react'
import styled from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md';



const Remove = styled.div`
  width: 30px;
  color: #CCD0D9;
  cursor: pointer;
  display: none;
  font-size: 25px;
`
const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center
  height: 40px;
  font-size: 22px
`
const CheckCircle = styled.div`
  wigth: 30px;
  heigh: 30px;
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
  .list {
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    justify-content: space-between
  }
  .list:hover {
    ${Remove} {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
  .content {
    display: flex;
    align-items: center
  }
  .working {
    border: 1px solid #CCD0D9;
    color: white;
  }
  .workingText {
    color: #4D535C;
  }
  .done {
    border: 1px solid #D870AD;
    color: #D870AD;
  }
  .doneText {
    color: #CCD0D9;
  }
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
              <Text className={item.done ? 'workingText' : 'doneText'}>{item.content}</Text>
            </div>
            <Remove onClick={() => removeBtn(item.id)}>
              <MdDelete />
            </Remove>
          </div>
        )}
    </TodoItemBlock>
  )
}

export default TodoItem