/* eslint-disable */

export const fetchData = jest.fn().mockImplementation(() => {
	return { results: [] };
});

export const loginUser = jest.fn().mockImplementationOnce(() => ({
	id: 31,
	loggedIn: true
})).mockImplementationOnce(() => ({
	id: 31,
	loggedIn: false
}));

export const getFavorites = jest.fn().mockImplementation(() => (
	[]
));

export const createUser = jest.fn(() => ({  
	id: 31,
	status: 400
})).mockImplementationOnce(() => ({
	id: 31,
	status: 200
})).mockImplementationOnce(() => ({
	id: 31,
	status: 400
}));

export const addFavorite = jest.fn();
export const removeFavorite = jest.fn();