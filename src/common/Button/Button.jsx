import React from 'react';

const Button = ({ buttonText, onClick }) => (
	<button
		className='flex h-10 px-5 items-center justify-center 
		rounded-lg border-solid border-2 border-emerald-500  
		bg-gradient-to-r from-cyan-100 to-blue-100 
		text-slate-800 hover:text-slate-500 active:text-slate-700
		transition-all duration-200
		'
		onClick={onClick}
	>
		{buttonText}
	</button>
);
export default Button;
