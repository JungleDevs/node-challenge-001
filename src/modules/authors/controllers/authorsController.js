import { CreateAuthorService } from '../services';
import AuthorsRepository from '../repositories';

async function create(request, response) {
  const { name } = request.body;
  const { filename: picture } = request.file;
  const author = await CreateAuthorService.execute(name, picture);
  return response.status(201).json(author);
}

async function index(request, response) {
  const authors = await AuthorsRepository.findAll();
  return response.json(authors);
}

async function show(request, response) {
  const { id } = request.params;
  const author = await AuthorsRepository.findById(id);

  if (!author) {
    throw { statusCode: 404, message: `Author: ${id} not found.` };
  }

  return response.json(author);
}

async function update(request, response) {
  const { id } = request.params;
  const patchParams = request.body;
  const author = await AuthorsRepository.findById(id);

  if (!author) {
    throw { statusCode: 404, message: `Author: ${id} not found.` };
  }

  const updatedAuthor = await AuthorsRepository.update(id, patchParams);
  return response.json(updatedAuthor);
}

async function remove(request, response) {
  const { id } = request.params;
  const author = await AuthorsRepository.deleteById(id);

  if (!author) {
    throw { statusCode: 404, message: `Author: ${id} not found.` };
  }

  return response.json(author);
}

export default {
  create,
  index,
  show,
  update,
  remove,
};
