import { useEffect, useMemo, useState } from "react";

const useMemo=()=>{
  const [effect, setEffect] = useState(0);
  const [memo, setMemo] = useState(0);
  useEffect(() => {
    console.log("effect");
  });
  useMemo(() => {
    console.log("memo");
  });

  return (
    <div>
      <button onClick={() => setEffect(effect + 1)}>EffectIncrement</button>
      <button onClick={() => setMemo(memo + 1)}>MemoIncrement</button>
    </div>
  );
}