import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props: { width: number; link?: boolean }) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</>
	);
};

export default Logo;
