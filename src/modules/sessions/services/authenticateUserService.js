import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { JWT_SECRET } from '../../../config';
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

  const token = sign({}, JWT_SECRET, {
    subject: toString(user.id),
    expiresIn: 60 * 60 * 60 * 2, // 2 hours
  });

  return { user, token };
}

export default {
  execute,
};
