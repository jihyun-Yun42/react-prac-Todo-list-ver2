// import { useEffect } from 'react';
import styled from 'styled-components'

const TodoHeadBlock = styled.div`
  padding: 30px 30px;
  border-bottom: 1px solid #e9ecef;

  .today {
    margin:0;
  }
  .week {
    font-size: 18px;
    margin-top: 4px;
  }
  .todo {
    font-weight: bold;
    color: #D870AD;
    font-size: 18px;
    margin-top: 40px;
  }
`

function TodoHead({ todo }) {
  const workingNum = todo.filter(item => item.done === true).length
  const today = new Date();
  const year = today.getFullYear()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const day = today.getDay()
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']

  // const [time, setTime] = useEffect()

  // const hour = today.getHours()

  return (
    <TodoHeadBlock>
      <h1 className='today'>{year}년 {month}월 {date}일</h1>
      <div className='week'>{week[day]}</div>
      <div className='todo'>할일 {workingNum}개 남음</div>
      {/* <div>{hour}</div> */}
    </TodoHeadBlock>
  )
}

export default TodoHead