import logo from "./logo.svg";
import "./App.css";
import TripleDiamond from "./TripleDiamond";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      Interaction Design
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TripleDiamond />}></Route>
          <Route exact path="/about" element={<TripleDiamond />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
