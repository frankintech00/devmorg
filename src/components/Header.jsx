import React from 'react';
import { FcHome } from 'react-icons/fc';

const Header = () => {
	return (
		<div className='flex flex-wrap justify-center align-middle'>
			<FcHome size={120} className='mx-5' />
			<h1 className='m-4 my-auto text-5xl text-center'>Mortgage Calculator</h1>
		</div>
	);
};

export default Header;
