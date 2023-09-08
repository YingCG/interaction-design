import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      Interaction Design
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TripleDiamond />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
