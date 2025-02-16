import { createContext, useState } from "react";
import Component2 from "./Component2";
const UserContext = createContext();
export default function Component1() {
 
  const [userName, setUserName] = useState("Vaithee");

  return (
    <>
      {/* <p>component 1</p>
      <Component2 user={userName} /> */}
      <UserContext.Provider value={userName}>
        <p>component 1</p>
        <Component2 />
      </UserContext.Provider>
    </>
  );
}

export { UserContext }; 
