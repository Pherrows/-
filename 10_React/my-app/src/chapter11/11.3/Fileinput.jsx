import React, { useRef } from 'react';

function Fileinput(props) {
  const fileinput = useRef(null);

const hadleSubmit = (e) => {
  e.preventDefault();
  console.log(fileinput.current.files);
  alert(`선택된 파일: ${fileinput.current.files[0].name}`)
}

  return (
    <form onSubmit={hadleSubmit}>
      <label>
        파일 업로드:
        <input type="file" ref={fileinput} />
        {/* 프로그래밍 적으로 값을 설정 할 수 없고 사용자가 첨부한 파일의 정보만 읽어올수 있기 떄문에
        React 에서 항상 비제어 컴포넌트 임 */}
        {/* 파일에 접근하기 위해서 DOM 노드의 ref를 만들어 접근 */}
      </label>
      <button type='submit'>제출</button>
    </form>
  );
}

export default Fileinput;