const signUp = () => {
    const { email } = newUser;
    for (const user of users) {
      if (user['email'] == email) {
        return 'email already exist. Please log in!';
      }
    }
    users.push(newUser);
    return 'You have successfully signed up!';
  };
  console.log(users);
  console.log(signUp(newUser));
  console.log(signUp(newUser));
  console.log(users);
  const currentUser = {
    email: 'xyz@gmail.com',
    password: '12345'
  };
  const signIn = user => {
    let found = false;
    const { email, password } = user;
    for (let i = 0; i < users.length; i++) {
      if (users[i]['email'] === email && users[i]['password'] === password) {
        users[i].isLoggedIn = true;
        return 'Successfully logged in';
      }
    }
    if (!found) {
      return 'Use does not exist';
    }
  };
  console.log(signIn(currentUser));
  console.log(users);
  console.log(signIn({ email: 'xyz@gmail.com', password: '12345' }));