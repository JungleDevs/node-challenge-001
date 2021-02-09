import createUserService from '../services/createUserService';

async function create(request, response) {
  const { email, name, password } = request.body;

  const user = await createUserService.execute(email, name, password);

  response.status(201).send(user);
}

export default {
  create,
};
