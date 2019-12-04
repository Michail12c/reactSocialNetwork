
export const required = value => {
	if (value) return undefined;

	return 'Field is required';
}

export const maxLengthCreator = (maxLenght) => value => {
	if (value && value.length > maxLenght) return `Max lenght is ${maxLenght} sumbols`;

	return undefined;
}