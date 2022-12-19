import React from 'react';

const Textarea = ({ labelText, placeholderText, name, onChange, value }) => (
	<div className='w-full'>
		<label className='text-base text-slate-700' htmlFor={name}>
			{labelText}
		</label>
		<textarea
			className='w-full block p-2 h-15
			rounded border-solid border-2 border-emerald-100  
			bg-gradient-to-r from-cyan-50 to-blue-0'
			type={name}
			id={name}
			name={name}
			placeholder={placeholderText}
			onChange={onChange}
			value={value}
		></textarea>
	</div>
);
export default Textarea;
