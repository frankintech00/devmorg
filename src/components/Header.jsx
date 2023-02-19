import React from 'react';
import { FcHome } from 'react-icons/fc';

const Header = () => {
	return (
		<div className='flex flex-wrap justify-center align-middle'>
			<FcHome size={80} className='mx-5' />
			<h1 className='m-4 my-auto text-2xl text-center'>Mortgage Calculator</h1>
		</div>
	);
};

export default Header;
