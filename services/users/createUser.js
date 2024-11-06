import userData from '../../src/data/users.json' assert { type: "json" };
import { v4 as uuid } from 'uuid';

const createUser = (username, password, name, image) => {
  const newUser = {
    id: uuid(),
    username,
    password,
    name,
    image
  };

  userData.users.push(newUser);
  return newUser;
};

export default createUser;