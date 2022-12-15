import React from 'react';
import styled from 'styled-components';
import Button from '../../../../common/Button/Button';
import { convertDate } from '../../../../helpers/dateGeneratop';
import { findAuthors } from '../../../../helpers/findAuthor';
import { convertDuration } from '../../../../helpers/pipeDuration';

const Container = styled.div`
	display: flex;
	border: 1px solid green;
	align-items: center;
	justify-content: center;
	padding: 15px;
	margin-bottom: 15px;
`;
const SmLeftContainer = styled.div`
	flex: 3;
	margin-right: 28px;
`;
const Title = styled.h2``;
const Desc = styled.p``;
const SmRightContainer = styled.div`
	flex: 1;
`;
const CourseInfo = styled.div`
	margin-top: 10px;
`;
const CourseInfoItem = styled.p`
	width: 200px;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	& span {
		font-weight: 700;
	}
`;
const BtnCaontainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CourseCard = ({ data, authorsList }) => {
	return (
		<Container>
			<SmLeftContainer>
				<Title>{data.title}</Title>
				<Desc>{data.description}</Desc>
			</SmLeftContainer>
			<SmRightContainer>
				<CourseInfo>
					<CourseInfoItem>
						<span>Authors:</span> {findAuthors(data.authors, authorsList)}
					</CourseInfoItem>
					<CourseInfoItem>
						<span>Duration:</span> {convertDuration(data.duration)}hours
					</CourseInfoItem>
					<CourseInfoItem>
						<span>Created:</span> {convertDate(data.creationDate)}
					</CourseInfoItem>
				</CourseInfo>
				<BtnCaontainer>
					<Button buttonText={'Show course'} />
				</BtnCaontainer>
			</SmRightContainer>
		</Container>
	);
};

export default CourseCard;
