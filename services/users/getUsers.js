import userData from '../../src/data/users.json' assert { type: "json" };

const getUsers = () => {
  let users = userData.users;
  console.log(users);

  return users;
}

export default getUsers;