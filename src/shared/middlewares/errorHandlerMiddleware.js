import { ENV } from '../../config';

export default function (error, request, response, next) {
  const statusCode = error.statusCode === 200 ? 500 : error.statusCode;
  response.status(statusCode);

  return response.json({
    message: error.message,
    stack: ENV === 'production' ? '🤖' : error.stack,
  });
}
