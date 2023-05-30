import React, { useState } from 'react';

const styles = {
  button: {
    height: 40,
    width: 200,
  },
  warning: {
    backgroundColor: 'red',
    textAlign: 'center',
    width: '100%',
    padding: 10,
    fontSize: '14pt',
    color: 'white',
  }
};

function WarningBanner(props) {
  console.log(props);
  // props 값에 따라서 if문을 이용하여
  // 전달받은 값이 false이면 null을 리턴
  // props.warn 이 false라면 null 을 리턴하기떄문에 컴포넌트는 렌더링 되지 않음
  if (!props.warn) {
    return null;
  }
  
  
  
  return (
    <div style={styles.warning}>
      Warning!
    </div>
  );
}





function MainPage(props) {

  const [showMarning, setShowMarning] = useState(false);

  const handleToggleClick = () => {
    setShowMarning(prevshowMarning =>!prevshowMarning);
  };

  


  return (
    <div>
      <WarningBanner warn={showMarning} />
      {/* 물론 보통의 경우 아래와 같이 조건부 렌더링으로 처리하는 것도 가능 */}
      {/* {showMarning && <WarningBanner />} */}

      <button type='button' style={styles.button} onClick={handleToggleClick}>
        {showMarning ? '감추기' : '보이기'}
      </button>
    </div>
  );
}

export default MainPage;


