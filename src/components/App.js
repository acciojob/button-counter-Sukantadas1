import React from "react";
import ClickCounter from "./components/ClickCounter";
import "./../styles/App.css";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <h1>React Click Counter App</h1>
      <ClickCounter />
    </div>
  );
};

export default App;
