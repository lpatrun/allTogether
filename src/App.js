import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import HomePage from './Pages/HomePage'
import Eror404Page from './Pages/Eror404Page'
import ContactPage from './Pages/ContactPage'
import LoginPage from './Pages/LoginPage'
import BlogPages from './Pages/BlogPages'
import Navigation from './Components/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<Eror404Page />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/blog' element={<BlogPages />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
