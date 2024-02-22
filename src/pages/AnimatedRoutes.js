import React from "react";
import Home from "./Home";
import SingleProject from "./project";
import Error from "./404";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="project/:id" element={<SingleProject />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
