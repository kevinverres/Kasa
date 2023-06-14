import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './page/Home/Home';
import House from './page/House/House';
import Error from './page/Error/Error';
import logo from "./assets/img/logo.png";
import logo_footer from "./assets/img/logo_footer.png"
import About from "./page/About/About";
const alt = "Le logo de l'agence kasa"

function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home 
						logo = {logo}
						alt = {alt}
						logo_footer = {logo_footer}
					/>} />
					<Route exact path="/house/:id" element={<House 
						logo = {logo}
						alt = {alt}
						logo_footer = {logo_footer}
					/>} />
					<Route exact path="/about" element={<About 
						logo = {logo}
						alt = {alt}
						logo_footer = {logo_footer}
					/>} />
					<Route path="*" element={<Error 
						logo = {logo}
						alt = {alt}
					/>} />
					<Route path="/house/*" element={<Error 
						logo = {logo}
						alt = {alt}
					/>} />
				</Routes>
			</Router>
		</div>
  );
}

export default App;
