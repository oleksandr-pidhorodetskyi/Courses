import React from 'react';

import Button from '../../../../common/Button/Button';
import { convertDate } from '../../../../helpers/dateGeneratop';
import { findAuthors } from '../../../../helpers/findAuthor';
import { convertDuration } from '../../../../helpers/pipeDuration';

const CourseCard = ({ data, authorsList }) => {
	return (
		<div
			className='flex justify-between p-3
			rounded border-solid border-2 border-emerald-100 
			shadow-lg shadow-gray-300/30
			[&:not(last-child)]:mb-3'
		>
			<div className='mr-5 flex-initial w-9/12'>
				<h2 className='font-bold'>{data.title}</h2>
				<p>{data.description}</p>
			</div>
			<div className='flex-initial'>
				<div className='pt-2 mb-3'>
					<div className='w-48 whitespace-nowrap overflow-hidden text-ellipsis'>
						<span className='font-bold'>Authors:</span>{' '}
						{findAuthors(data.authors, authorsList)}
					</div>
					<div className='w-48 whitespace-nowrap overflow-hidden text-ellipsis'>
						<span className='font-bold'>Duration:</span>{' '}
						{convertDuration(data.duration)}hours
					</div>
					<div className='w-48 whitespace-nowrap overflow-hidden text-ellipsis'>
						<span className='font-bold'>Created:</span>{' '}
						{convertDate(data.creationDate)}
					</div>
				</div>
				<div className='flex justify-center items-center'>
					<Button buttonText={'Show course'} />
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
