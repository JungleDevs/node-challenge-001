import User from '../entities';

async function execute(email, name, password) {
  const userExists = await User.query().findOne({ email });

  if (userExists) {
    throw new Error('Email already in use');
  }

  const user = await User.query().insert({
    email,
    name,
    password,
  });

  return user;
}

export default {
  execute,
};
