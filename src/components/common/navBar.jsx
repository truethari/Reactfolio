import { faCloudMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "light-theme"
	);

	// change theme function
	const themeToggle = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
	};

	// save the theme preference to local storage
	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">About</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "articles"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/articles">Articles</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
							<li
								className="nav-item-icon"
								onClick={() => themeToggle()}
							>
								{theme === "light-theme" ? (
									<FontAwesomeIcon icon={faCloudMoon} />
								) : (
									<FontAwesomeIcon icon={faSun} />
								)}
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
