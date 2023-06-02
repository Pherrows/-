import React from 'react';

function Card(props) {
  const {title, backgroundColor, children} = props;
  return (
    <div
      style={{
        margin: 8,
        padding: 8,
        borderRadius: 8,
        boxSizing: "0px 0px 4px greay",
        backgroundColor: backgroundColor || 'lightgray',
        // backgroundColor에 falst 값이 들어오면 기본값으로 lightgray 사용
      }}
    >
      {/* 조건부 렌더링 */}
      {title &&
        <h1 style={{borderBottom:'1px solid grat'}}>{title}</h1>
      }
      {children}
    </div>
  );
}

export default Card;