import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
	width: 100%;
`;
const TextArea = styled.textarea`
	display: block;
	padding: 10px;
	height: 90px;
	border: 1px solid yellow;
	width: 98%;
`;
const Label = styled.label`
	margin-bottom: 5px;
	font-size: 14px;
`;
const Textarea = ({ labelText, placeholderText, name, onChange, value }) => (
	<Container>
		<Label htmlFor={name}>{labelText}</Label>
		<TextArea
			type={name}
			id={name}
			name={name}
			placeholder={placeholderText}
			onChange={onChange}
			value={value}
		></TextArea>
	</Container>
);
export default Textarea;
