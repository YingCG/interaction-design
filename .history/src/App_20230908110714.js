import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      Interaction Design
      <Nav />
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