import { CreateUserService } from '../services';

async function create(request, response) {
  const { name, email, password } = request.body;

  const user = await CreateUserService.execute(name, email, password);

  response.status(201).send(user);
}

export default {
  create,
};
