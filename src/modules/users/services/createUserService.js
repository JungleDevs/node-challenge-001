import bcrypt from 'bcryptjs';

import UserRepository from '../repositories';

async function execute(name, email, password) {
  const userExists = await UserRepository.findByEmail(email);

  if (userExists) {
    throw new Error('Email already in use');
  }

  const hashedPassword = await bcrypt.hash(password, 8);

  const user = await UserRepository.create(name, email, hashedPassword);

  return user;
}

export default {
  execute,
};
