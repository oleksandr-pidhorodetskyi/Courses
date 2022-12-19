import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import { convertDuration } from '../../helpers/pipeDuration';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { v4 as uuidv4 } from 'uuid';
import { getDate } from '../../helpers/getDate';

const Courses = () => {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [isAddClicked, setIsAddClicked] = useState(false);

	const [inputs, setInputs] = useState({});
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [changedAuthors, setChangedAuthors] = useState(authors);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const handleAddCourse = () => {
		setIsAddClicked((props) => {
			return !props;
		});
		setInputs({});
		setChangedAuthors(authors);
		setCourseAuthors([]);
	};
	const updateMockedAuthors = () => {
		authors.map((el) => {
			if (el.id !== mockedAuthorsList.id) {
				mockedAuthorsList.push(el);
			}
		});
	};
	const handleCreateCourse = () => {
		if (
			inputs.title &&
			inputs.description &&
			inputs.duration &&
			courseAuthors
		) {
			updateMockedAuthors();
			setIsAddClicked((props) => {
				return !props;
			});

			setCourses((prev) => {
				return [
					...prev,
					{
						id: uuidv4(),
						title: inputs.title,
						description: inputs.description,
						creationDate: getDate(),
						duration: inputs.duration,
						authors: courseAuthors,
					},
				];
			});
		} else {
			alert('Please, fill all fields');
		}
	};

	const handleInput = (e) => {
		setInputs((prev) => {
			if (
				(e.target.name === 'duration' && isNaN(e.target.value)) ||
				e.target.value <= 0
			) {
				e.target.value = '';
				e.target.placeholder = 'Wrong input';
			}
			return { ...prev, [e.target.name]: e.target.value };
		});
	};

	const createAuthor = () => {
		setAuthors((prev) => {
			return [...prev, { id: uuidv4(), name: inputs.name }];
		});
	};

	useEffect(() => {
		setChangedAuthors(authors);
	}, [authors]);

	const addAuthor = (id) => {
		setChangedAuthors((prev) => {
			return prev.filter((el) => el.id !== id);
		});
		setCourseAuthors((prev) => {
			return [...prev, id];
		});
	};
	const delCourseAuthor = (id) => {
		setChangedAuthors((prev) => {
			return [...prev, authors.find((el) => el.id === id)];
		});
		setCourseAuthors((prev) => {
			return prev.filter((el) => el !== id);
		});
	};

	const findAuthorName = (id) => {
		let k = authors.find((el) => el.id === id).name;
		return k;
	};

	return (
		<div className='h-screen pt-16 '>
			<div className='pb-5 bg-white px-2 rounded shadow-lg shadow-gray-300/60'>
				{isAddClicked ? (
					<div>
						<div className='mb-4'>
							<div className='flex justify-between items-center h-16 mb-2'>
								<div className='w-80'>
									<Input
										labelText={'Title'}
										placeholderText={'Enter title...'}
										name={'title'}
										onChange={handleInput}
										value={inputs.title}
									/>
								</div>
								<Button
									onClick={handleCreateCourse}
									buttonText={'Create course'}
								/>
							</div>
							<Textarea
								labelText={'Description'}
								placeholderText={'Enter description'}
								name={'description'}
								onChange={handleInput}
								value={inputs.description}
							/>
						</div>
						<div
							className='grid rounded-lg 
						grid-cols-2 grid-rows-2 
						gap-x-10 gap-y-5 px-5 py-5
						bg-slate-200
						shadow-lg shadow-gray-300/50
						transition-all duration-200'
						>
							<div
								className='p-5
							bg-slate-50 rounded-lg
							shadow-lg shadow-gray-500/30'
							>
								<h2 className='text-center mb-2 font-bold'>Add author</h2>
								<div className='mb-4 w-3/4'>
									<Input
										labelText={'Author name'}
										placeholderText={'Enter author name...'}
										name={'name'}
										onChange={handleInput}
										value={inputs.name}
									/>
								</div>
								<div className='flex justify-center'>
									<Button onClick={createAuthor} buttonText={'Create author'} />
								</div>
							</div>
							<div
								className='p-5
							bg-slate-50 rounded-lg
							shadow-lg shadow-gray-500/30'
							>
								<h2 className='text-center mb-2 font-bold'>Authors</h2>
								<ul className='w-full h-44 overflow-y-scroll'>
									{changedAuthors.map((author) => (
										<li
											key={author.id}
											className='flex justify-between items-center mb-2'
										>
											<p>{author.name}</p>
											<Button
												onClick={() => addAuthor(author.id)}
												buttonText={'Add author'}
											/>
										</li>
									))}
								</ul>
							</div>
							<div
								className='p-5
							bg-slate-50 rounded-lg
							shadow-lg shadow-gray-500/30'
							>
								<h2 className='text-center mb-2 font-bold'>Duration</h2>
								<div className='mb-5 w-1/2'>
									<Input
										labelText={'Duration'}
										placeholderText={'Enter duration in minute...'}
										name={'duration'}
										onChange={handleInput}
										value={inputs.duration}
									/>
								</div>
								<p className='text-xl'>
									Duration:{' '}
									<span className='font-bold'>
										{convertDuration(inputs.duration)}
									</span>
									hours
								</p>
							</div>
							<div
								className='p-5
							bg-slate-50 rounded-lg
							shadow-lg shadow-gray-500/30'
							>
								<h2 className='text-center mb-2 font-bold'>Course authors</h2>
								<ul className='w-full h-44 overflow-y-scroll'>
									{courseAuthors.length === 0 ? (
										<h3>Author list is empty</h3>
									) : (
										courseAuthors.map((authorID) => (
											<li
												key={authorID}
												className='flex justify-between items-center mb-2'
											>
												<p>{findAuthorName(authorID)}</p>
												<Button
													onClick={() => delCourseAuthor(authorID)}
													buttonText={'Delete author'}
												/>
											</li>
										))
									)}
								</ul>
							</div>
						</div>
					</div>
				) : (
					<div className='h-full'>
						<div className=''>
							<div className='flex justify-between items-center h-16 mb-2'>
								<SearchBar
									setCourses={setCourses}
									courses={mockedCoursesList}
								/>
								<Button
									onClick={handleAddCourse}
									buttonText={'Add new course'}
								/>
							</div>
						</div>
						{courses.map((el) => (
							<CourseCard
								key={el.id}
								data={el}
								authorsList={mockedAuthorsList}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Courses;
