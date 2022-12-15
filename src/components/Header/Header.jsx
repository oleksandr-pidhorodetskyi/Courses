import React from 'react';
import styled from 'styled-components';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
const Container = styled.div`
	display: flex;
	height: 10vh;
	border-bottom: 1px solid rgba(0, 0, 0, 0.199);
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
`;
const SmLeftContainer = styled.div`
	display: flex;
	margin-right: 20px;
	align-items: center;
`;
const UserName = styled.h3`
	margin-right: 20px;
`;
const Header = () => {
	return (
		<Container>
			<Logo />
			<SmLeftContainer>
				<UserName>Vasya</UserName>
				<Button buttonText='Logout'></Button>
			</SmLeftContainer>
		</Container>
	);
};

export default Header;
