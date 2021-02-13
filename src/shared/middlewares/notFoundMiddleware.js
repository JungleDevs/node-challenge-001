export default function notFoundMiddleware(request, response, next) {
  const error = {
    statusCode: 404,
    message: `Not found: ${request.originalUrl}`,
  };
  next(error);
}
