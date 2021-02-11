import User from '../entities';

async function findById(id) {
  return await User.query().findById(id);
}

async function findByEmail(email) {
  return await User.query().findOne({ email });
}

async function deleteById(id) {
  return await User.query().deleteById(id);
}

async function create(name, email, password) {
  return await User.query().insert({
    email,
    name,
    password,
  });
}

export default {
  findById,
  findByEmail,
  deleteById,
  create,
};
