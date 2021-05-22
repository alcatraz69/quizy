import { Link } from 'react-router-dom';
import './Navbar.css'

export const Navbar = () => {
	

	return (
		<nav className="navbar">
			<Link to='/' className="nav_logo">
				<div className="nav_logoTxt">
					Quizy
				</div>
			</Link>

			
		</nav>
	);
};