import userData from '../../src/data/users.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const getUserById = (id) => {

  const user = userData.users.find(user => user.id === id);
  if (!user) {
    throw new NotFoundError('User', id);
  }
  return user
}

export default getUserById;