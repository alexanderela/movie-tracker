export const fetchData = async (url) => {
	const response = await fetch(url)
	if (response.status >= 400) {
		throw new Error('Error!')
	} else {
			const cleanResponse = await response.json()
			return cleanResponse
	}
}

export const fetchImage = async (url) => {
	const response = await fetch(url)
	if (response.status >= 400) {
		throw new Error('Error!')
	} else {
		return response
	}
}