export const findAuthors = (authors, authorsList) => {
	let authorsNames = authors.map((authorId) => {
		let author = authorsList.find((el) => el.id === authorId);
		return author.name;
	});
	return authorsNames.join(', ');
};
