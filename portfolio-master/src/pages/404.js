import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

const NotFoundPage = () => {
	return (
		<Layout>
			<h1>404</h1>
			<p>oopsie! the page you're looking for does not exist,</p>
			<Link to="/">Go Home</Link>
		</Layout>
	);
};

export default NotFoundPage;
