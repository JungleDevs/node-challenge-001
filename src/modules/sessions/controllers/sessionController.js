import { AuthenticateUserService } from '../services';

async function create(request, response) {
  const { email, password } = request.body;
  const { user } = await AuthenticateUserService.execute(email, password);

  response.send({ user });
}

export default {
  create,
};
