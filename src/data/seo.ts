export interface SEOItem {
	page: string;
	description: string;
	keywords: string[];
}

const SEO: SEOItem[] = [
	{
		page: "home",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies.",
		keywords: ["Tharindu", "Tharindu N", "Tharindu Nayanajith"],
	},

	{
		page: "about",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies.",
		keywords: ["Tharindu", "Tharindu N", "Tharindu Nayanajith"],
	},

	{
		page: "articles",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
		keywords: ["Tharindu", "Tharindu N", "Tharindu Nayanajith"],
	},

	{
		page: "projects",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to.",
		keywords: ["Tharindu", "Tharindu N", "Tharindu Nayanajith"],
	},

	{
		page: "contact",
		description:
			"If you're interested in collaborating on a project, feel free to reach out to me. I'm always open to new ideas and opportunities.",
		keywords: ["Tharindu", "Tharindu N", "Tharindu Nayanajith"],
	},
];

export default SEO;
