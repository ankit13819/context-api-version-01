import { useState } from "react";
import "./App.css";
import { MyContext } from "./components/MyContext";
import MyComponent from "./components/MyComponent";

function App() {
  const [text, setText] = useState("Hello ");
  return (
    <MyContext.Provider value={{ text, setText }}>
      <h1>Context Api</h1>
      <MyComponent />
    </MyContext.Provider>
  );
}

export default App;
