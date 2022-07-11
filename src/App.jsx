import React from "react";
import Header from "./Header";
import hello from "./img/hello.png";
import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <p className="hello">
        <img src={hello} alt="Hello" />
        World
      </p>
    </div>
  );
}

export default App;
