import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
