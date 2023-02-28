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
      done: true,
      edit: false
    }
    setTodo([...todo, newTodo])
    setContent('')
  }
  const [input, setInput] = useState(false)
  const addInputBox = () => {
    setInput(input => !input)
  }

  return (
    <div>
      <form className={input ? 'inputBox' : 'hide'} onSubmit={addTodo}>
        <input
          value={content}
          type="text"
          onChange={(event) => setContent(event.target.value)}
          required
          placeholder='할 일을 입력 후 Enter를 누르세요.' />
      </form>

      <div className={input ? 'circle addCircle' : 'circle'} onClick={addInputBox}><MdAdd /></div>
    </div>
  )
}

export default TodoCreate