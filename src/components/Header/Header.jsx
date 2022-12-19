import React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	return (
		<div
			className='absolute inset-0 w-screen flex h-14
		border-b-2 border-gray justify-between items-center px-4'
		>
			<Logo />
			<div className='flex items-center'>
				<h3 className='mr-5'>Vasya</h3>
				<Button buttonText='Logout'></Button>
			</div>
		</div>
	);
};

export default Header;
