import React from 'react';

const Input = ({ labelText, placeholderText, name, onChange, value }) => (
	<div className='w-full'>
		<label className='text-base text-slate-700' htmlFor={name}>
			{labelText}
		</label>
		<input
			className='px-3 block h-8 w-full
			rounded border-solid border-2 border-emerald-100  
			bg-gradient-to-r from-cyan-50 to-blue-0
			text-slate-700'
			type={name}
			id={name}
			name={name}
			placeholder={placeholderText}
			onChange={onChange}
			value={value}
		></input>
	</div>
);
export default Input;
