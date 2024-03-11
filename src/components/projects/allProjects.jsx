import React from "react";
import Project from "./project";
import INFO from "../../data/user";

const AllProjects = () => {
	return (
		<div className="bg-white shadow-md rounded-md p-6">
			{INFO.projects.map((project, index) => (
				<div className="mb-6" key={index}>
					<Project
						title={project.title}
						description={formatDescription(project.description)}
						link={project.link}
						linkText={project.linkText}
					/>
				</div>
			))}
		</div>
	);
};

// Function to format the description as bullet points
const formatDescription = (description) => {
	const points = description
		.split("\n")
		.filter((point) => point.trim() !== "");
	return (
		<ul className="list-disc ml-6">
			{points.map((point, index) => (
				<li key={index}>{point}</li>
			))}
		</ul>
	);
};

export default AllProjects;
