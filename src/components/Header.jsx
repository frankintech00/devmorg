import React from 'react';
import { FcHome } from 'react-icons/fc';

const Header = () => {
	return (
		<div className='flex flex-wrap place-content-center'>
			<FcHome size={120} />
			<h1 className='m-3 text-5xl text-center'>Mortgage Calculator</h1>
		</div>
	);
};

export default Header;
