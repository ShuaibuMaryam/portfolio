import React from "react";
import Layout from "../components/layout";
import ColorWord from "../components/color-word";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

import { useParams, Link } from "react-router-dom";
import Projects from "../data";

const ProjectTemplate = () => {
	const { id } = useParams();
	const project = Projects.find((item) => item.id === id);
	const {
		title,
		stack,
		explanation,
		image,
		wrappingUp,
		requirement,
		challenge,
		purpose,
		live,
		coderepo,
		shortDesc,
	} = project;
	return (
		<Layout>
			<Fade bottom>
				<ColorWord color="grey">
					<Link to="/">Go Back Home</Link>
				</ColorWord>

				<Title>{title}</Title>
				<p>{shortDesc}</p>

				<table>
					<tbody>
						<tr>
							<th>
								<ColorWord color="grey">stack:</ColorWord>
							</th>
							<td>
								<ColorWord color="orange">
									<Stack>
										{stack.map((item) => {
											return <span key={item}>{item}</span>;
										})}
									</Stack>
								</ColorWord>
							</td>
						</tr>

						<tr>
							{/* <th>
								<ColorWord color="grey">code:</ColorWord>
							</th>
							<td>
								<ColorWord color="green">
									<a href={coderepo} target="_blank" rel="noopener noreferrer">
										github repo
									</a>
								</ColorWord>
							</td> */}
						</tr>

						<tr>
							<th>
								<ColorWord color="grey">live:</ColorWord>
							</th>
							<td>
								<ColorWord color="green">
									<a href={live} target="_blank" rel="noopener noreferrer">
										live site
									</a>
								</ColorWord>
							</td>
						</tr>
					</tbody>
				</table>

				<ProjectContent>
					<div>
						<img src={image} alt="project" />
					</div>
					<h2>Purpose and Goal</h2>
					<p>{purpose}</p>
					<h2>general requirement</h2>
					<p>{requirement}</p>
					{/* <h2>stack explanation</h2> */}
					{/* <p>{explanation}</p> */}
					<h2>challenges</h2>
					<p>{challenge}</p>
					<h2>Wrapping Up</h2>
					<p>{wrappingUp}</p>
				</ProjectContent>

				<OtherProjects>
					<ColorWord color="grey">my other projects </ColorWord>
					{Projects.filter((items) => items.id !== id).map((project) => {
						const { id, title } = project;
						return (
							<ColorWord color="blue" key={id}>
								<Link to={`/project/${id}`}>{title}</Link>
							</ColorWord>
						);
					})}
				</OtherProjects>
			</Fade>
		</Layout>
	);
};

export default ProjectTemplate;

const Title = styled.h1`
	font-size: var(--size-700);
	margin-block-start: 1rem;
`;

const Stack = styled.div`
	span:not(:last-child):after {
		content: ", ";
	}
`;

const OtherProjects = styled.nav`
	padding-top: var(--size-900);
	padding-bottom: var(--size-900);
	text-transform: lowercase;

	span:not(:first-child):not(:last-child):after {
		content: ", ";
	}
`;

const ProjectContent = styled.section`
	padding-top: var(--size-800);

	& > * + * {
		margin-top: var(--size-300);
	}

	& > p + p {
		margin-top: var(--size-600);
	}

	* + h1,
	* + h2,
	* + h3 {
		margin-top: var(--size-800);
	}

	h1 {
		font-size: var(--size-700);
	}

	h2 {
		font-size: var(--size-600);
	}

	h3 {
		font-size: var(--size-500);
	}

	img {
		border: 10px solid hsla(7, 100%, 95%, 1);
	}
`;
