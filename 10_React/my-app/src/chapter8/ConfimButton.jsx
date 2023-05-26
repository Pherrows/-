// 사용자에게 확인을 요구하는 버튼 컴포넌트

import { useState } from "react";

function ConfirmButton() {

  const [inConfirmed, setInConfirmed] = useState(false)

  const handleConfirm = () => {
    setInConfirmed(true);
  }

  return (
    <button type="button" onClick={handleConfirm} disabled={inConfirmed}>
      {inConfirmed ? '확인됨' : '확인하기'}

    </button>
  );
}

export default ConfirmButton;

// Quiz : 버튼을 누르면 확인하기 가 확인됨 으로 변경되면서 버튼 비활성화 처리 해보기
// 무엇을 해야할까?
// inConfirmed 라는 state 만들기
// 버튼을 클릭하면 inConfirmed 상태를 바꾸는 handleConfirm 이벤트 헨들러(함수) 만들기
// 조건부 렌더링으로 버튼의 내용을 확인하기 -> 확인됨 으로 바꾸기
// 버튼 비활성화 처리