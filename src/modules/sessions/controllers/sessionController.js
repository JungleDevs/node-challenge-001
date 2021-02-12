import { AuthenticateUserService } from '../services';

async function create(request, response) {
  const { email, password } = request.body;
  const { user, token } = await AuthenticateUserService.execute(
    email,
    password,
  );

  response.send({ user, token });
}

export default {
  create,
};
