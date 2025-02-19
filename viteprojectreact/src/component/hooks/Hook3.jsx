import { useRef, useState } from "react";

export default function HookRef() {
  const ref = useRef(0);
  const [count, setCount] = useState(0);

  const clickBtn = () => {
    ref.current = ref.current + 1;
    setCount(ref.current);
    console.log(ref, "working");
  };
  return (
    <>
      <p> Totalclick : {count}</p>

      <button
        type="button"
        onClick={clickBtn}
        className="border border-amber-500 bg-amber-600 text-white px-5 py-2"
      >
        Click
      </button>
    </>
  );
}
