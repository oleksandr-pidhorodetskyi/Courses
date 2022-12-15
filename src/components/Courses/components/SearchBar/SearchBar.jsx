import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

const Container = styled.div`
	display: grid;
	width: 40%;
	grid-template-columns: 3fr 1fr;
	gap: 30px;
`;

const SearchBar = ({ setCourses, courses }) => {
	const [findedCourses, setFindedCourses] = useState([]);
	const [searched, setSearched] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setSearched(e.target.value);
	};

	const handleClick = () => {
		setCourses(findedCourses);
	};

	useEffect(() => {
		if (searched !== '') {
			setFindedCourses(
				courses.filter(
					(el) =>
						el.title.toLowerCase().includes(searched.toLowerCase()) ||
						el.id.toLowerCase().includes(searched.toLowerCase())
				)
			);
		} else if (searched === '') {
			setFindedCourses(courses);
		}
	}, [searched, courses]);

	return (
		<Container>
			<Input
				labelText=''
				placeholderText='Enter course name or id...'
				name='searchInput'
				onChange={handleChange}
				value={searched}
			/>
			<Button onClick={handleClick} buttonText='Search' />
		</Container>
	);
};

export default SearchBar;
