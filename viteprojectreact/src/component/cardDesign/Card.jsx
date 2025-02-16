import { useNavigate } from "react-router-dom";
import "./Card.css";
export default function Card({ data }) {
  const userData = data;
  console.log(userData, "data");

  const navigate = useNavigate();
  const moveBuyNow = () => {
    console.log("working");

    navigate("../buy-now");
  };

  // function moveBuyNow() {
  //   console.log("working");
  // }
  return (
    <>
      <section class="upcoming-event-borderbox">
        <div class="heading-line-border">
          <h2 class="upcoming-event-heading">UPCOMING EVENTS</h2>
        </div>
        <div class="main-container">
          {/* Event Card  */}
          <div class="event-card">
            <img
              class="event-img"
              src="./friends-gathered-celebrate-new-years-party.jpg"
              alt="Birthday Party"
            />
            <div class="event-info">
              <h3>Birthday Party {userData.name}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                fugiat veniam fuga tempora atque. {userData.mobile}
              </p>
              <button class="buy-btn">Buy Now</button>
            </div>
          </div>

          <div class="event-card">
            <img
              class="event-img"
              src="./excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space.jpg"
              alt="Music Event"
            />
            <div class="event-info">
              <h3>Music Event</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                fugiat veniam fuga tempora atque.
              </p>
              <button class="buy-btn">Buy Now</button>
            </div>
          </div>

          <div class="event-card">
            <img class="event-img" src="./preview.jpg" alt="Dance Event" />
            <div class="event-info">
              <h3>Dance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                fugiat veniam fuga tempora atque.
              </p>
              <button class="buy-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
