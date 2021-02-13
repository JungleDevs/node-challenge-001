import { ENV } from '../../config';

export default function (error, request, response, next) {
  const statusCode = response.statusCode === 200 ? 500 : response.statusCode;
  response.status(statusCode);

  return response.json({
    message: error.message,
    stack: error.stack && ENV === 'development' ? error.stack : '🤖',
  });
}
