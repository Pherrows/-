import {createGlobalStyle} from 'styled-components'
import reset, {Reset} from 'styled-reset'
// import reset from 'styled-reset'
import TodoTemplate from './coponents/TodoTemplate';
import TodoInsert from './coponents/TodoInsert';
import TodoList from './coponents/TodoList';
import { useState } from 'react';


// 패키지 설치
// npm install styled-components styled-reset react-icons

//  styled-reset: reset css
// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// 커스텀은 props 또는 Css 스타일로 변경 가능


// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 사용하면 컴포넌트가 만들어지고 이를 렌더링 하면됨

const GlobalStyle = createGlobalStyle`
  /* reset css 적용 */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;


function App() {
  // todos 배열안에 객체 형태로 데이터가 존재
  // id, 내용, 완료 여부
  // TodoList에 props로 전달
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    },
  ]);
  return (
    <>
    {/* <Reset /> */}
    <GlobalStyle />
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos}/>
    </TodoTemplate>
    </>
  );
}

export default App;
