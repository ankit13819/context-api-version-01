import { useContext } from "react";
import { MyContext } from "./MyContext";

function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h1>Hey {text}</h1>
      <button onClick={() => setText("Hello Context")}>Click Me</button>
    </div>
  );
}
export default MyComponent;
