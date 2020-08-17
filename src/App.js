import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat/Chat";

function App() {
  const [user, setUser] = useState(null);

  return (
    // BEM naming convention
    <div className="App">
      <Router>
        {!user ? (
          <h1>LOGIN PAGE</h1>
        ) : (
          <>
            {/* header */}
            <Header />
            <div className="AppBody">
              {/* sidebar */}
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <Chat />
                </Route>
              </Switch>
              {/* react-router -> Chat screen*/}
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
