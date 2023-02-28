import React from 'react'
import styled from 'styled-components';

const TodoListBlock = styled.div`
  flex: 1;
  height : 500px;
  padding: 20px 30px;
  overflow-y: auto;
`;

function TodoList({ children }) {
  return (
    <div>
      <TodoListBlock>
        {children}
      </TodoListBlock>
    </div>
  )
}

export default TodoList