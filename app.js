const http = new EasyHTTP;

// get users

/*
http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err)); */

// create new user
const user = {
  username: 'johnnyDoey',
  email: 'jdoe@gmail.com'
}

// add user
/*
http.post('https://jsonplaceholder.typicode.com/users', user)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// replace user
/*
http.put('https://jsonplaceholder.typicode.com/users/3', user)
.then(data => console.log(data))
.catch(err => console.log(err)); */

// delete user

http.delete('https://jsonplaceholder.typicode.com/users/5')
.then(data => console.log(data))
.catch(err => console.log(err)); 
