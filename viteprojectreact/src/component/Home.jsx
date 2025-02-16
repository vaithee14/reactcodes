import { useNavigate } from "react-router-dom";
import Card from "./cardDesign/Card";
import Navbar from "./navbar/Navbar";
import SubmitButton from "./Submitbtn";

export default function Home() {
  // const name = "vaitheeshwari";

  const userData = {
    name: "vaitheeshwari",
    mobile: 385738535,
    address: "no:2,aaa street",
    marks: 848,
  };

  const navigate = useNavigate();
  const moveBuyNow = () => {
    navigate("../buy-now");
    // console.log("working");
  };
  return (
    <>
      <Navbar />

      <h3>WELCOME {userData.name}</h3>
      <p>your mobile number is: {userData.mobile}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <Card data={userData} />
      <SubmitButton />

      <button type="submit" onClick={moveBuyNow}>
        {" "}
        click
      </button>
    </>
  );
}
