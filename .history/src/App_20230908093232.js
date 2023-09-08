import logo from "./logo.svg";
import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="App">
      Interaction Design
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<TripleDiamond />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
