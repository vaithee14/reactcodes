import { useContext } from "react";
import { UserContext } from "./Component1";

export default function Component3() {
  const user = useContext(UserContext);
  console.log(user, "user");

  return (
    <>
      <p>Component 3</p>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
