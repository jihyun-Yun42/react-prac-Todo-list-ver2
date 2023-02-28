import './TodoCreate.css'
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';

function TodoCreate({ todo, setTodo }) {
  const [content, setContent] = useState('')
  const addTodo = (event) => {
    event.preventDefault()
    const newTodo = {
      id: todo[todo.length - 1].id + 1,
      content,
      done: true
    }
    setTodo([...todo, newTodo])
    setContent('')
  }
  const inputBox = document.querySelector('#inputBox')
  const circle = document.querySelector('#circle')

  const HIDE_CLASSNAME = 'hide'

  const addInputBox = () => {
    inputBox.classList.toggle(HIDE_CLASSNAME)
    circle.classList.toggle('addCircle')
  }
  return (
    <div>
      <form id='inputBox' className='inputBox hide' onSubmit={addTodo}>
        <input
          value={content}
          type="text"
          onChange={(event) => setContent(event.target.value)}
          required
          placeholder='할 일을 입력 후 Enter를 누르세요.' />
      </form>

      <div id='circle' className='circle' onClick={addInputBox}><MdAdd /></div>
    </div>
  )
}

export default TodoCreate