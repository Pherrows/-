import React from 'react';
import styled, { css } from 'styled-components';

// 0. styled-components 설치하기
// npm 을 사용하는 경우
// npm install styled=components

// CSS in JS 란?
// 이 문구가 뜻하는 그대로, 이 기술은 JS안에 CSS를 작성하는 것

// styled-components 란?
// CSS 문법을 그대로 사용하면서 결과물을 스타일링 된 컴포넌트 형태로 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 떄문에 리액트랑 궁합이 잘 맞음
// 백틱을 사용하여 구성 요소의 스타일을 지정

// 다양한 문법은 공식문법 참고
// https://styled-components.com/

// 1. 기본적인 사용법
// 스타일링된 컴포넌트 형태로 반환됨
const Wrapper = styled.div`
  padding: 1rem;
  background: gray;

  /* 6. 반응형 디자인
  - 일반 CSS를 사용할 떄와 같이 media 쿼리를 사용 가능
  - 리액트 스럽게 react-responsive 라이브러리 사용
  */
  /* 기본 적으로 가로 크기를 1024px 에 가운데 정렬을 하고 
  가로 크기가 작아짐에 따라 크기를 줄이고 768px 미만이 되면 꽉 채우기  */
  width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 768px;
  }  
  @media screen and (max-width: 764px) {
    width: 100%;
  }  
  
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
// vscode-styled-conponents 익스텐션 설치 필요


// 2. props 사용하기
// 컴포넌트 형태라 props 사용이 가능 (최고 장점 중 하나)
const Button = styled.button`
  width: ${props => props.width || '100px'};
  height: ${props => props.height || '40px'};
  color: ${props => props.dark ? 'white' : 'black'};
  background: ${props => props.dark ? 'black' : 'white'};
  border: 2px solid black;
  /* border-radius: 6px; */
  cursor: pointer;

  /* 3. & 문자를 사용하여 자기 자신 선택 가능 */
  &:hover {
    background: #b3b3b3;
  }

  /* 4. 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우 css를 불러와 사용 */
  ${props => 
    props.inverted &&
    css`
    background: white;
    color: #1f1f1f;
    border: 2px solid white;
    &:hover {
      background: #1f1f1f;
      color: white;
    }
    `
  }

  /* 버튼 사이 간격 띄우기 */
  & + & {
    margin-left: 1rem;
  }
`;

// 5. 스타일 확장(커스텀) 하기
// button 컴포넌트에 모서리를 둥글게하는 style이 추가된 RoundedButton 컴포넌트

const RoundedButton = styled(Button)`
  border-radius: 16px;
`;

function StyledPage(props) {
  return (
    <Wrapper>
      <Title>안녕, 리액트!</Title>

      <Button width='200px' height='60px'>Normal</Button>

      {/* ={true} 는 생략 가능 */}
      <Button dark>Dark</Button>

      <Button inverted>Inverted</Button>

      <RoundedButton>Rounded</RoundedButton>
    </Wrapper>
  );
}

export default StyledPage;