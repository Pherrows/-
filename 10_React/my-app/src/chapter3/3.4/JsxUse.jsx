
import React from "react"
function JsxUse() {
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그
  // const element = (
  //   <div>
  //     {/* <div> */}
  //     {/* <input> */}
  //     {/* <br> */}
  //     {/* HTML 에서는 input 또는 br 태그를 사용 할 떄 닫지 않고 사용가능
  //       하지만 리액트에서는 태그를 열었으면 무조건 닫아야 함 */}
  //     <div></div>
  //     <input />
  //     <br />
  //   </div>
  // );

  // 2. 꼭 감싸져야만 하는 태그
  // 두개 이상의 태그는 무조건 하나의 태그로 감싸져 있어야함
  // const element = (
    // <div>안녕하세요.</div>
    // <div>안녕히계세요.</div>
    // 반드시 하나의 부모 태그로 감싸 져야함
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </div>
    // 이렇게 단순히 감싸기 위하여 불필요한 div로 감싸는게 별로 좋지 않을 떄도 있음
    // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해 질 수 있음
    // 이럴떄 사용 하는 것이 React의 Fragment
    // 개발자 도구로 확인해보면 별도의 엘리먼트로 나타나지 않음
    // <React.Fragment>
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </React.Fragment>
    // 생략도 가능 함 
  //   <>
  //   <div>안녕하세요.</div>
  //   <div>안녕히계세요.</div>
  //   </>
  // );

  // 3. JSX 안에서 자바스크립트 값 또는 표현식 사용하기
  // 자바스크립트 변수 (또는 함수) 를 사용해야 할 떄에는 {} 사용
  const name = 'react';

  const user = {
    firstName: 'goni',
    lastName: 'kim'
  };

  const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
  }
  const element = (
    <>
    <div>{name} 배우기</div>
    <h1>Hellom {formatName(user)}</h1>
    </>
  )

  return element;
}

export default JsxUse; // JsxUse 컴포넌트 내보내기
// export를 해줘야 다른곳에서 import 해서 사용 가능