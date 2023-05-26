import { useEffect, useState } from "react";

function EffectSummary() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // (공통사항)
  // useEffect는 마운트 시에는 무조건 실행됨!!
  // useEffect의 return 되는 함수는 언마운트 시에는 무조건 실행됨!

  // 렌더링 될떄마다 매번 실행됨
  useEffect(() => {
    console.log('%c나는 매번 실행됨', 'color: black; backgrond: #ffdae0;');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  });

  // count가 변할때마다 실행됨
  useEffect(() => {
    console.log('%ccount가 변함', 'color: red; backgrond: #e2d6fd;');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
      
    };
  },[count]);

  // name이 변할떄마다 실행됨
  useEffect(() => {
    console.log('%cname이 변함', 'color: blue; backgrond: #fff;');

    return () => {
      // 마운트를 제외한 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  },[name]);

  // 마운트 될떄만 실행됨
  useEffect(() => {
    console.log('%c마운트 될떄만 실행', 'color: green; backgrond: #fff;');

    return () => {
      //언마운트 될떄만 실행됨
      console.log('언마운트');
    };
  },[]);

  return (
    <div>
      <p>카운트: {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>카운트 +1</button>
      <p>이름: {name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default EffectSummary