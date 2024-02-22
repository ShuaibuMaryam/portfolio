import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
// import pages
import AnimatedRoutes from "./pages/AnimatedRoutes";
const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<AnimatedRoutes></AnimatedRoutes>
			</ScrollToTop>
		</Router>
	);
};

export default App;
