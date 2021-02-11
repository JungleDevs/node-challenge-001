import { CreateUserService } from '../services';
import UserRepository from '../repositories';

async function create(request, response) {
  const { name, email, password } = request.body;

  const user = await CreateUserService.execute(name, email, password);

  response.status(201).send(user);
}

async function show(request, response) {
  const { id } = request.params;
  const user = await UserRepository.findById(id);
  return response.send(user);
}

async function remove(request, response) {
  const { id } = request.params;
  const user = await UserRepository.deleteById(id);
  return response.send(user);
}

export default {
  create,
  show,
  remove,
};
