import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // BEM naming convention
    <div className="App">
      <h1>Welcome to my Slack Clone!</h1>
      {/* header */}
      <Header />
      <div className="AppBody">
        {/* sidebar */}
        <Sidebar />
        {/* react-router */}
      </div>
    </div>
  );
}

export default App;
