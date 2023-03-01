import React, { useState } from 'react'
import styled from 'styled-components'
import { FiEdit2 } from "react-icons/fi";

// const editBtn = (id) => {
// setTodo(todo.map(item => item.id === id ? { ...item, edit: !item.edit } : item))
// setText(todo.find(item => item.id === id).content)
// }

const Text = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 24px;
`

const TodoEdit = ({ todo, setTodo, item }) => {
  const [text, setText] = useState('')
  // setText()
  const edit = (id) => {
    setTodo(todo.map(item => item.id === id ? { ...item, content: text, edit: !edit } : item))
  }
  const editBtn = (id) => {
    setTodo(todo.map(item => item.id === id ? { ...item, edit: !item.edit } : item))
    setText(todo.find(item => item.id === id).content)
  }
  return (
    <div>
      {
        item.edit ?
          <form onSubmit={() => edit(item.id)}>
            <input
              value={text}
              type="text"
              onChange={(e) => setText(e.target.value)} />
          </form>
          :
          <div style={{
            flex: '1',
            display: "flex",
            justifyContent: 'space-between',
            // float: 'right',
          }}>
            <Text className={item.done ? 'workingText' : 'doneText'}>{item.content}</Text>
            <div style={{
              color: '#CCD0D9',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              justifyContent: 'flex-end',
              alignItems: 'center',
              fontSize: '23px',
              marginRight: '7px',
              float: 'right'
            }}
              onClick={() => editBtn(item.id)}>
              <FiEdit2 />
            </div>
          </div>

      }

    </div>
  )
}

export default TodoEdit