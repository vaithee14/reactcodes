import { useState } from "react";

export default function Hooks1() {
  const [color, setColor] = useState("red");
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <p>The color is {color}</p>
      <button type="button" onClick={() => setColor("blue")}>
        blue </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
      <button type="button" onClick={() => setColor("yellow")}>
        Yellow
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        pink
      </button>

      <section>
        <div>
          {isShow === true && (
            <p>
              W3Schools is optimized for learning and training. Examples might
              be simplified to improve reading and learning. Tutorials,
              references, and examples are constantly reviewed to avoid errors,
              but we cannot warrant full correctness of all content. While using
              W3Schools, you agree to have read and accepted our terms of use,
              cookie and privacy policy.
            </p>
          )}
        </div>
        {/* <div>
          <p>
            Hooks in React are functions that let you use state and lifecycle
            features in functional components without needing class components.
            Introduced in React 16.8, hooks allow developers to manage state,
            handle side effects, and access component lifecycle features in a
            cleaner and more reusable way.
          </p>
        </div> */}

        <button type="button" onClick={() => setIsShow(true)}>
          ShowContent
        </button>
      </section>
    </>
  );
}
