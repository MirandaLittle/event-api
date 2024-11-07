import userData from '../../src/data/users.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const deleteUser = (id) => {
  const index = userData.users.findIndex((user) => user.id === id);

  if (index === -1) { // findIndex function returns -1 if index is not found
    throw new NotFoundError('User', id);
  }

  userData.users.splice(index, 1); // 1 = delete count, 1 item
  return id;
};

export default deleteUser;
