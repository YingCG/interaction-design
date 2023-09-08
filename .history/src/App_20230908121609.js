import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      Interaction Design
      <Nav />
      <BrowserRouter>
        <Router>
          <Routes>
            <Route exact path="/" element={<TripleDiamond />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
