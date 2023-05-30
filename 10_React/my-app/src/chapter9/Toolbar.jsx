import React, { useState, useTransition } from 'react';

const stylse = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray"
  },
  greeting: {
    margunRight: 8
  }
}

function Toolbar(props) {
  const { isLoggedIn, handleClicklogin, handleClicklogout} = props;
  // console.log(props);
  return (
    <div style={stylse.wrapper}>
      {/* quiz: 로그인/로그아웃 버튼을 누를떄마다 로그인상태이면 인사말이나오도록 &&조건부 랜더링
      버튼도 로그인/로그아웃 버튼이 삼항 연산자로 조건부 렌더링*/}
      {/* isLoggedIn 값에 따라 조건부 렌더링 처리 */}
      {/* <span style={stylse.greeting}>환영합니다!</span> */}


      {/* <button type='button' style={stylse.wrapper} onClick={handleClicklogin}>로그인</button> */}
      {/* <button type='button' style={stylse.wrapper} onClick={handleClicklogout}>로그아웃</button> */}
      {isLoggedIn && <span style={stylse.greeting}>환영합니다!</span>}
      
      {isLoggedIn 
      ? <button type='button' style={stylse.wrapper} onClick={handleClicklogout}>로그아웃</button>
      : <button type='button' style={stylse.wrapper} onClick={handleClicklogin}>로그인</button>}



    </div>
  );
}

export default Toolbar;

// 정리:
// 논리 연산자(&&)와 삼항 연산자 (? :)를 이용한 조건부 렌더링은 매우 많이 쓰임
// 동적인 UI 만드는 3 step
// 1. HTML/CSS 로 미리 마크업/디자인 완성
// 2. UI 현재 상태를 state 로 저장
// 3. 조건문으로 state에 따라 UI가 어떻게 보일지 작성

