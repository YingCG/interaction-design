import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { HashRouter, Routes, Route, Link, Router } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      Interaction Design
      <Nav />
      <HashRouter>
        <Routes>
          <Router>
            <Route exact path="/" element={<TripleDiamond />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Router>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
