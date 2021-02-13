import { CreateUserService } from '../services';
import UserRepository from '../repositories';

async function create(request, response) {
  const { name, email, password } = request.body;

  const user = await CreateUserService.execute(name, email, password);
  return response.status(201).send(user);
}

async function show(request, response) {
  const { id } = request.params;
  const user = await UserRepository.findById(id);

  if (!user) {
    throw { statusCode: 404, message: `User: ${id} not found.` };
  }

  return response.send(user);
}

async function remove(request, response) {
  const { id } = request.params;
  const user = await UserRepository.deleteById(id);

  if (!user) {
    throw { statusCode: 404, message: `User: ${id} not found.` };
  }

  return response.send(user);
}

export default {
  create,
  show,
  remove,
};
