import image1 from "./assets/images/burh.png";
import image2 from "./assets/images/techpression.jpg";
import image3 from "./assets/images/tanta.jpg";
const Projects = [
	{
		id: "recAGJfiU4CeaV0HL",
		title: "Burtech Products",
		stack: [
			"react",
			"styled-components",
			"chakra ui",
			"django",
			"redux-toolkit",
			"react-router",
			"react-icons",
			"react-markdown",
		],
		shortDesc:
			"an e-commerce web-app for a manufacturing company, built with react, styled-components, chakra ui , redux toolkit, and coupled with a django rest api for the backend.",
		explanation:
			"React was selected as the primary JavaScript library for its component-based architecture and efficient rendering capabilities. styled-components was chosen for its ability to write CSS directly in JavaScript. Chakra UI was utilized to enhance the user interface design. Django, a high-level Python web framework, was employed for back-end development due to its robust features. Redux Toolkit was integrated for efficient state management. React Router was used for routing within the application. React Icons provided a library of icons for easy integration, and React Markdown facilitated rendering Markdown content within the application.",
		image: image1,
		wrappingUp:
			"we collaborated to develop the website using React. We enhanced our React skills, improved Git administration for smooth collaboration, implemented user authentication, and integrated APIs for enhanced functionality. It was a valuable learning experience that helped us grow as developers.",
		requirement:
			"In order for this initiative to be considered successful, there were several criteria that needed to be met. The resultant website had to be quick and responsive, incorporating a few basic animations, while also being user-friendly for non-technical individuals to make edits easily. These requirements ensured that the website would deliver an optimal user experience, with fast loading times, engaging visual elements, and the ability for the client to update content effortlessly. By meeting these criteria, the project would achieve its intended goals and provide a successful solution for the client.",
		challenge:
			"During the team project for Burtech, we encountered various challenges related to organizing the codebase, integrating the chosen technology stack (including React, styled-components, Chakra UI, Django, Redux Toolkit, React Router, React Icons, and React Markdown), and ensuring optimal component reusability. However, through collaborative efforts, determination, and effective problem-solving, our team successfully navigated these challenges and delivered a high-quality solution for Burtech. ",
		purpose:
			"For Burtech, a manufacturing company client, our objective was to address the need for an enhanced online presence and operational efficiency. Our aim was to develop a secure, user-friendly web application that could facilitate seamless online payments while showcasing their products in a structured and streamlined manner. ",
		live: "https://burtechproducts.com",
		coderepo: "",
	},
	{
		id: "recIL6mJNfWObonls",
		title: "Tech pression",
		stack: ["next.js", "wordpress", "tailwind css", "shad cn"],
		explanation:
			"i used Next.js for a fast and seamless user experience, Tailwind CSS ensuring a modern and engaging interface across devices, and WordPress serves as the CMS tool, allowing effortless creation, editing, and organization of blog posts",
		shortDesc:
			"Tech pression Blog is a dynamic and visually appealing tech blog site designed to deliver the latest insights and updates from the ever-evolving world of technology",
		image: image2,
		wrappingUp:
			"In conclusion, this project presented an opportunity for me to enhance my skills and explore new technologies. I successfully implemented and designed the frontend by leveraging shadcn and tailwind css and wordpress as a CMS tool.",
		requirement:
			"As always, apart from the bare minimum that the resultant website must be fast and responsive. I had a few requirements in mind to be able to call this project a success.The resulting website must match the design on the design file.",
		challenge:
			"It was fairly challenging integrating wordpress, but with a lot of googling and checking online resources, I was able to tackle the issues",
		purpose:
			"The purpose of the project is to create a visually appealing tech blog site designed to deliver the latest insights and updates from the ever-evolving world of technology",
		live: "https://pression-tech.vercel.app/",
		coderepo: "",
	},
	{
		id: "rec61x18GVY99hQq5",
		title: "Tanta innovatives",
		stack: [
			"next.js",
			// "tailwind",
			// "Gpt-3 Api",
			// "react-reveal",
			// "nodejs",
			// "express",
			// "mongodb",
			"chakra ui",
			"styled components",
		],
		explanation:
			"Crafted with Next.js, the site combines the power of server-side rendering for optimal performance and SEO. Chakra ui and styled components were used to achieve the UI",
		image: image3,
		wrappingUp:
			"In conclusion, this project was successfully developed using next.js, chakra UI and styled components. ",
		shortDesc:
			"Tanta innovatives is a sophisticated IT consulting website designed to showcase expertise and provide a seamless user experience. Also providing businesses with software soulutions",
		requirement:
			"The project required developing a website which showcases in many different ways how Tanta innovatives offers a range of IT solutions to businesses and individuals",
		challenge:
			"The project was quite straight forward as most components were static",
		purpose:
			"Whether you're seeking IT solutions, consulting services, or industry insights, Tanta innovatives is your trusted partner in navigating the complexities of the digital landscape.",
		live: "https://www.tantainnovatives.com/",
		coderepo: "",
	},
];
export default Projects;
