import { useState } from "react";
import EffectSummary from "./EffectSummary";

function EffectContainer() {
  const [isvisivle, setIsVisible] = useState(true);


  return (
    <div>
      <button type="button" onClick={() => {setIsVisible(true)}}>나타나라</button>
      <button type="button" onClick={() => {setIsVisible(false)}}>사라져라</button>
      {isvisivle && <EffectSummary />}
      {/* 논리 연산자의 short-circuit을 이용한 조건 */}
    </div>
  );
}

export default EffectContainer