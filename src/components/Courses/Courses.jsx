import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { convertDuration } from '../../helpers/pipeDuration';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

const Container = styled.div`
	width: 90%;
	margin: 0px auto;
`;
const TopContainer = styled.div`
	margin-bottom: 20px;
`;
const TopRowContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: last baseline;
	height: 50px;
	margin-bottom: 10px;
`;
const TitleContainer = styled.div`
	width: 200px;
`;
const AuthorContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 30vh);
	row-gap: 10px;
	column-gap: 30px;
	border: 1px solid black;
	padding: 30px 15px;
`;
const ItemContainer = styled.div`
	background-color: red;
	padding: 10px;
`;
const Title = styled.h2`
	text-align: center;
	line-height: 0;
`;
const ItemInput = styled.div`
	padding-right: 30px;
	margin-bottom: 15px;
`;
const BtnContainer = styled.div`
	display: flex;
	justify-content: center;
`;
const Duration = styled.p`
	font-size: 22px;
	line-height: 0;
	margin-top: 40px;
	& span {
		font-weight: 700;
	}
`;
const List = styled.ul`
	width: 80%;
	height: 70%;
	list-style-type: none;
	overflow-y: scroll;
`;
const AuthorItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const AuthorName = styled.p`
	line-height: 0;
`;

const Courses = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [isAddClicked, setIsAddClicked] = useState(false);

	const [inputs, setInputs] = useState({ duration: 0 });
	const [authors, setAuthors] = useState(mockedAuthorsList);

	const [courseAuthors, setCourseAuthors] = useState([]);

	const [data, setData] = useState({
		id: '',
		title: '',
		description: '',
		creationDate: '',
		duration: 0,
		authors: '',
	});

	const handleAddCourse = () => {
		setIsAddClicked((props) => {
			return !props;
		});
	};
	const handleCreateCourse = () => {
		setIsAddClicked((props) => {
			return !props;
		});
	};
	const handleInput = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const createAuthor = () => {
		// setAuthors((prev) => {
		// 	return [...prev, { id: Date.now(), name: inputs.name }];
		// });
		mockedAuthorsList.push({ id: Date.now(), name: inputs.name });
		console.log(mockedAuthorsList);
		setAuthors(mockedAuthorsList);
		console.log(authors);
	};
	const addAuthor = (id) => {
		setAuthors((prev) => {
			return prev.filter((el) => el.id !== id);
		});
		setCourseAuthors((prev) => {
			return [...prev, id];
		});
	};

	const findAuthorName = (id) => {
		console.log(authors);
		let k = mockedAuthorsList.find((el) => el.id === id);
		return k.name;
	};

	useEffect(() => {
		console.log(inputs);
		// console.log(courseAuthors);
		console.log(authors);
	}, [inputs, authors]);

	return (
		<Container>
			{isAddClicked ? (
				<>
					<TopContainer>
						<TopRowContainer>
							<TitleContainer>
								<Input
									labelText={'Title'}
									placeholderText={'Enter title...'}
									name={'title'}
									onChange={handleInput}
									value={inputs.title}
								/>
							</TitleContainer>
							<Button
								onClick={handleCreateCourse}
								buttonText={'Create course'}
							/>
						</TopRowContainer>
						<Textarea
							labelText={'Description'}
							placeholderText={'Enter description'}
							name={'description'}
							onChange={handleInput}
							value={inputs.description}
						/>
					</TopContainer>
					<AuthorContainer>
						<ItemContainer>
							<Title>Add author</Title>
							<ItemInput>
								<Input
									labelText={'Author name'}
									placeholderText={'Enter author name...'}
									name={'name'}
									onChange={handleInput}
									value={inputs.name}
								/>
							</ItemInput>
							<BtnContainer>
								<Button onClick={createAuthor} buttonText={'Create author'} />
							</BtnContainer>
						</ItemContainer>
						<ItemContainer>
							<Title>Authors</Title>
							<List>
								{authors.map((author) => (
									<AuthorItem key={author.id}>
										<AuthorName>{author.name}</AuthorName>
										<Button
											onClick={() => addAuthor(author.id)}
											buttonText={'Add author'}
										/>
									</AuthorItem>
								))}
							</List>
						</ItemContainer>
						<ItemContainer>
							<Title>Duration</Title>
							<ItemInput>
								<Input
									labelText={'Duration'}
									placeholderText={'Enter duration in minute...'}
									name={'duration'}
									onChange={handleInput}
								/>
							</ItemInput>
							<Duration>
								Duration: <span>{convertDuration(inputs.duration)}</span>
								hours
							</Duration>
						</ItemContainer>
						<ItemContainer>
							<Title>Course authors</Title>
							<List>
								{courseAuthors.length === 0 ? (
									<h3>Author list is empty</h3>
								) : (
									courseAuthors.map((authorID) => (
										<AuthorItem key={authorID}>
											<AuthorName>{findAuthorName(authorID)}</AuthorName>
											<Button
												onClick={() => addAuthor(authorID)}
												buttonText={'Delete author'}
											/>
										</AuthorItem>
									))
								)}
							</List>
						</ItemContainer>
					</AuthorContainer>
				</>
			) : (
				<>
					<TopContainer>
						<TopRowContainer>
							<SearchBar setCourses={setCourses} courses={mockedCoursesList} />
							<Button onClick={handleAddCourse} buttonText={'Add new course'} />
						</TopRowContainer>
					</TopContainer>
					{courses.map((el) => (
						<CourseCard key={el.id} data={el} authorsList={mockedAuthorsList} />
					))}
				</>
			)}
		</Container>
	);
};

export default Courses;
