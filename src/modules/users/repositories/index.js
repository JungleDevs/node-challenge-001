import User from '../entities';
async function findByEmail(email) {
  return await User.query().findOne({ email });
}
async function create(name, email, password) {
  return await User.query().insert({
    email,
    name,
    password,
  });
}

export default {
  findByEmail,
  create,
};
