import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/contact/' element={<Contact />} />
					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;

