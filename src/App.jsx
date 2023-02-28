import React from 'react'
import { createGlobalStyle } from 'styled-components'
import TodoTemplate from './component/TodoTemplate'
import TodoList from './component/TodoList'
import TodoHead from './component/TodoHead'
import TodoItem from './component/TodoItem'
import TodoCreate from './component/TodoCreate'

const Background = createGlobalStyle`
body {
  background: #e9ecef;
}
`
function App() {
  return (
    <div>
      <Background />
      <TodoTemplate>
        <TodoHead />
        <TodoList>
          <TodoItem />
        </TodoList>
        <TodoCreate />
      </TodoTemplate>
    </div>
  )
}

export default App