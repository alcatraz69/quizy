import { Link } from 'react-router-dom';

export const Navbar = () => {
	

	return (
		<nav className=' md:mx-8 font-semibold flex justify-between items-center px-6 py-4 border-b '>
			<Link to='/' className=''>
				<div className='text-purple-700 dark:text-purple-500 italic font-semibold text-lg'>
					Quizy
				</div>
			</Link>

			
		</nav>
	);
};