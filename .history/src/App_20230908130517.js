import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { HashRouter, Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      Interaction Design
      <HashRouter>
        <Routes>
          {/* <Nav /> */}
          <Route exact path="/nav" element={<Nav />}></Route>
          <Route exact path="/" element={<TripleDiamond />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
