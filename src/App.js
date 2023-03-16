import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import BlogPage from './pages/blogPage';
import ContactPage from './pages/contactPage';
import LoginPage from './pages/loginPage';
import Error404Page from './pages/error404Page';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/blog" element={<BlogPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="*" element={<Error404Page />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
