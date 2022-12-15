export const convertDate = (date) => {
	let [day, month, year] = date.split('/');
	if (day.length === 1) {
		day = day.toString().padStart(2, '0');
	}
	if (month.length === 1) {
		month = month.toString().padStart(2, '0');
	}
	const result = [day, month, year].join('.');
	return result;
};
