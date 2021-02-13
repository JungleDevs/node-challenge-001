import AuthorsRepository from '../repositories';

const execute = async (name, picture = null) => {
  const authorExists = await AuthorsRepository.findByName(name);

  if (authorExists) {
    throw { statusCode: 400, message: 'Author already registered' };
  }

  const author = await AuthorsRepository.create(name, picture);

  return author;
};

export default {
  execute,
};
