import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import BlogPage from "./pages/BlogPage";
import Error404 from "./pages/Error404";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
