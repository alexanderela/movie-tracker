import * as API from './API'

export const fetchMovies = async () => {
	const apiKey = '26d5b93e45b773596adda2d2b99efa0f'
	const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`

	const movieData = await API.fetchData(url)
	const currentMovies = await returnMovieData(movieData.results)
	return currentMovies
}

export const returnMovieData = async (movies) => {
	const moviePromises = movies.map( async movie => {

		return {
			title: movie.title,
			poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
			overview: movie.overview,
			releaseDate: formatReleaseDate(movie.release_date),
			rating: movie.vote_average
		}
	})
	return Promise.all(moviePromises)
}

const formatReleaseDate = (date) => {
	const month = date.slice(5,7)
	const day = date.slice(8,10)
	const year = date.slice(0,4)
	return `${month}/${day}/${year}`
}