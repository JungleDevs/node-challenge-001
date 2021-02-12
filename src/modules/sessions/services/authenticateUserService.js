import { compare } from 'bcryptjs';

import UserRepository from '../../users/repositories';

async function execute(email, password) {
  const user = await UserRepository.findByEmail(email);

  if (!user) {
    throw Error('Invalid credential');
  }

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw Error('Invalid credential');
  }

  return { user };
}

export default {
  execute,
};
