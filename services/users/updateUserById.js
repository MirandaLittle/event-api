import userData from '../../src/data/users.json' assert { type: "json" };
import NotFoundError from '../../errors/notFoundError.js';

const updateUserById = (id, username, password, name, image) => {
  const user = userData.users.find(user => user.id === id);

  if (!user) {
    throw new NotFoundError('User', id);
  }

  user.username = username ?? user.username; // The Nullish Coalescing Operator (??), if "title" is null or undefinced keep original user.title
  user.password = password ?? user.password;
  user.name = name ?? user.name;
  user.image = image ?? user.image;

  return user;
}

export default updateUserById;

// ?? If a new title (or author, or any other property) is provided, use that to update the user. But if it's not provided (it's null or undefined), just keep the original title (or author, etc.) of the book