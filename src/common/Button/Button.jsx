import React from 'react';
import styled from 'styled-components';
const Btn = styled.button`
	padding: 5px 25px;
	height: 30px;
	background-color: transparent;
	border: 1px solid purple;
	&:hover {
		background-color: #d9d4e22c;
	}
	&:active {
		background-color: #bfb0db2c;
	}
`;
const Button = ({ buttonText, onClick }) => (
	<Btn onClick={onClick}>{buttonText}</Btn>
);
export default Button;
