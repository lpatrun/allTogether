import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"> element = {<Home />}</Route>
          <Route path="/blog" element={Blog}></Route>
          <Route path="/contact" element={Contact}></Route>
          <Route path="/login" element={Login}></Route>
          <Route path="*" element={Error404}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
