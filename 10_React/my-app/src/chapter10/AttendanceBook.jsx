import React from 'react';
// Quiz2: 배열의 각 요소(객체 데이터)에 id 속성을 추가하고 배열 랜더링 시 key 값 추가해보기
const students = [
  {
    name: '이상혁',
    id: 1
  },
  {
    name: '유재석',
    id: 2
  },
  {
    name: '이용대',
    id: 3
  },
  {
    name: '유연성',
    id: 4
  },
];

// 출석부 이름 출력하기
function AttendanceBook(props) {
  return (
    <ul>
      {/* Quiz1: 학생 이름을 반복 렌더링 해보기 */}
    {/* {students.map((item, index) => {
      console.log(item);
      return <li key={item.id}>{item.name}</li>
    })} */}
    {students.map(item => <li key={item.id}>{item.name}</li>)}
    
    </ul>


  );
}

export default AttendanceBook;