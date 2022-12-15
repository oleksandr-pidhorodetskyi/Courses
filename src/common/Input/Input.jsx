import React from 'react';
import styled from 'styled-components';
const InpContaier = styled.div`
	width: 100%;
`;
const Inp = styled.input`
	display: block;
	padding: 0px 10px;
	height: 30px;
	border: 1px solid orange;
	width: 100%;
`;
const Label = styled.label`
	margin-bottom: 5px;
	font-size: 14px;
`;
const Input = ({ labelText, placeholderText, name, onChange, value }) => (
	<InpContaier>
		<Label htmlFor={name}>{labelText}</Label>
		<Inp
			type={name}
			id={name}
			name={name}
			placeholder={placeholderText}
			onChange={onChange}
			value={value}
		></Inp>
	</InpContaier>
);
export default Input;
