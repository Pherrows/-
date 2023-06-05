import React from 'react';

function ChuldComponent(props) {
  console.log('자식 컴포넌트 렌더링 발생');
  return (
    <div>
      
    </div>
  );
}

export default React.memo(ChuldComponent);

// (중요) 리액트에서는 기보적으로 부모 컴포넌트가 렌더링되면 모든 자식 컴포넌트들도 무조건 렌더링 된다!
// 이떄 react.memo() 를 사용하면 props의 변경이 없을 경우 렌더링을 막아준다
// props 에 변경이 있음 당연이 렌더링 해야함

// 상위 컴포넌트에서 전달하는 함수에 useCallback()을 쓰면
// props로 전달되는 함수가 새로 정의되지 않기떄문에 props의 변경이 없으므로 재렌더링 발생안함

// 최적화 관련 memoization 기법들은 무분별하게 사용하면 안됨!
// 재사용을 위해 어딘가에 저장해두기 떄문에 메모리를 추가적으로 사용

// React.memo 가 필요할 때 ?
// 1) 컴포넌트가 같은 props로 자주 렌더링 될떄
// 2) 컴포넌트가 렌더링 될 떄마다 복잡한 로직(연산) 을 처리해야 할떄