export const fetchData = async (url) => {
	const response = await fetch(url)
  const cleanResponse = await response.json()
  return cleanResponse
}

export const loginUser = async (user) => {
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const userData = await response.json();
  return userData.data;
}

export const createUser = async (user) => {
  try {
    return fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    })
  }
  catch(error) {
    console.log(error.message)
  }
}

export const addFavorite = async (movie, user) => {
  const response = await fetch('http://localhost:3000/api/users/favorites/new', {
    method: 'POST',
    body: JSON.stringify({
      movie_id: movie.id,
      user_id: user.id,
      title: movie.title,
      poster_path: movie.poster,
      release_date: movie.releaseDate,
      vote_average: movie.rating,
      overview: movie.overview
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

export const removeFavorite = async (movie, user) => {
  try {
    return fetch(`http://localhost:3000/api/users/${user.id}/favorites/${movie.id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        movie_id: movie.id,
        user_id: user.id,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  catch (error) {
    console.log(error.message)
  }
}

export const getFavorites = async (user) => {
  try {
    const url = `http://localhost:3000/api/users/${user.id}/favorites`
    await fetchData(url)
  }
  catch (error) {
    console.log(error.message)
  }
}
