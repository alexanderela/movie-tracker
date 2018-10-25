export const fetchData = async (url) => {
	const response = await fetch(url)
	if (response.status >= 400) {
		throw new Error('Error!')
	} else {
			const cleanResponse = await response.json()
			return cleanResponse
	}
}

export const loginUser = async (user) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const userData = await response.json();
    return userData.data;
  }
  catch(error) {
    console.log(error.message);
  }
}

export const createUser = async (user) => {
  const userData = await getUsers()
  console.log(userData)
  const matchingUser = userData.find(userEntry => {
    return userEntry.email === user.email
  })
  if (!matchingUser) {
    fetch('http://localhost:3000/api/users/new', {
      method: 'POST',
      body: JSON.stringify(user),
      headers:{
        'Content-Type': 'application/json'
      }
    }); 
  } else {
    console.log('ERROR: User already exists')
    return null
  }
}

const getUsers = async () => {
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'GET',
    body: JSON.stringify(),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const userData = await response.json();
  return userData.data
}







// export const fetchData = async (url) => {
//   const response = await fetch(url)
//   if (response.status >= 400) {
//     throw new Error('Error!')
//   } else {
//       const cleanResponse = await response.json()
//       return cleanResponse
//   }
// }

// export const loginUser = async (user) => {
//   try {
//     const response = await fetch('http://localhost:3000/api/users', {
//       method: 'POST',
//       body: JSON.stringify(user),
//       headers:{
//         'Content-Type': 'application/json'
//       }
//     })
//     const userData = await response.json();
//     return userData.data;
//   }
//   catch(error) {
//     console.log(error.message);
//   }
// }

// export const createUser = (user) => {
//   fetch('http://localhost:3000/api/users/new', {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   });
// }
