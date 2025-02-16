import { useEffect, useState } from "react";

export default function Hook2() {
  const [name, updateName] = useState("vidhya");

  const [count, setCount] = useState(0);
  console.log(count, "count");

  //   useEffect(() => {
  //     // updateName("vaitheeshwari");
  //     // setTimeout(() => {
  //     //   setCount((count) => count + 1);
  //     // }, 1000);
  //   });

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((count) => count + 1);
  //     }, 1000);
  //   });

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <p>Your name is: {name}</p>
      {/* <button type="button" onClick={() => updateName("vidhya")}>
        Change name
      </button>  */}

      <p>your count is : {count}</p>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        Update count
      </button>
    </>
  );
}
