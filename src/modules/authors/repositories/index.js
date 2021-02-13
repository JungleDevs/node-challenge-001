import Author from '../entities';

async function create(name, picture = null) {
  return await Author.query().insert({
    name,
    picture,
  });
}

async function findAll() {
  return await Author.query();
}

async function findById(id) {
  return await Author.query().findById(id);
}

async function findByName(name) {
  return await Author.query().findOne({ name });
}

async function deleteById(id) {
  return await Author.query().deleteById(id);
}

async function update(id, patchParams) {
  return await Author.query().patchAndFetchById(id, patchParams);
}

export default {
  create,
  findAll,
  findById,
  findByName,
  deleteById,
  update,
};
