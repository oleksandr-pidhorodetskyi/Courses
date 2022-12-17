export const getDate = () => {
	const today = new Date();
	const year = today.getFullYear();
	let month = today.getMonth() + 1;
	let day = today.getDate();
	return day + '/' + month + '/' + year;
};
