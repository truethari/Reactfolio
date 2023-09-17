import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = () => {
	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li className="nav-item">
								<NavLink to="/">Home</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/about">About</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/projects">Projects</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/articles">Articles</NavLink>
							</li>

							<li className="nav-item">
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
